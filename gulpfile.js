////////////////////////////////////////////////////////////////////////////////
// Gulp File
////////////////////////////////////////////////////////////////////////////////

// =============================================================================
// Requirements
// =============================================================================

const gulp        = require('gulp'),                   // Gulp.
      babel       = require('gulp-babel'),             // ES6 to ES5 transpiler.
      browserSync = require('browser-sync').create(),  // Browser watcher.
      chalk       = require('chalk'),                  // Style Terminal logs (already included via gulp-util).
      concat      = require('gulp-concat'),            // Concatenate files.
      configs     = require('gulp-config-grabber'),    // Parse data from the config.json file for the current env.
      gulpif      = require('gulp-if'),                // Add conditionals inline.
      gulpsass    = require('gulp-sass'),              // Sass precompiler.
      log         = require('fancy-log'),              // Output terminal messages.
      notifier    = require('gulp-notifier'),          // Manage notification messages and other aesthetics.
      plumber     = require('gulp-plumber'),           // Asynchronous concatenator.
      sequence    = require('gulp-sequence'),          // Run Gulp taks in a particular order
      rename      = require("gulp-rename"),            // Rename files before they are saved..
      source      = require('gulp-source-exists'),     // Report if any src files don't exist
      sourcemaps  = require('gulp-sourcemaps'),        // Source map generator for JS and CSS.
      injectScss  = require('gulp-inject-scss'),       // Inject JS variables into SCSS
      symbols     = require('gulp-svg-to-symbols'),    // SVG Symbols creator.
      uglify      = require('gulp-uglify-es').default, // ES6 supported minifier/uglifier.
      versioniser = require("gulp-versioniser");       // Manages versioning of filenames via .emv.

// PostCSS
const postcss                = require('gulp-postcss'),
      autoprefixer           = require('autoprefixer'),
      postcssInlineSvg       = require('postcss-inline-svg'),
      postcssAssets          = require('postcss-assets');

// =============================================================================
// Settings & Directories - See config.json
// =============================================================================

// Environment
const environment  = process.env.ENVIRONMENT || 'production';
const config       = configs.create({'env': environment, 'dynamic':['paths', 'themes']})
const project      = config.project
const host         = typeof config.host == 'string' ? config.host : config.host[environment]

// Settings --------------------------------------------------------------------

// Generate JS and CSS external sourcemaps. Never in production environment.
const sourceMaps = config.settings.sourceMaps

// CSS: results in compressed or nested files. JS: Results in Uglified or untouched files. Always in production environment.
const minify = config.settings.minify

// Defines whether Javascript should be transcoded with Babel for non-ES6 supported browsers..
const ES5Support = config.settings.ES5Support

// Adds automatic incremental version numbers to files using .env.
const versioning = config.settings.versioning

// Combine all CSS files into one file.
const combineCSS = config.settings.combineCSS

// Directory Paths -------------------------------------------------------------

// Project/Server root path. Useful when gulpfiles are nested.
const root = config.paths.root || ""

// Local web directory (sometimes it's not public_html or public).
const webroot = config.paths.webroot || "public"

// Development Javascript files.
const scripts = root + config.paths.scripts

// Development Sass files.
const sass = root + config.paths.sass

// Production Javascript files.
const js = root + webroot + config.paths.js

// Production Font files.
const fonts = root + webroot + config.paths.fonts

// Production CSS files.
const css = root + webroot + config.paths.css

// Production Image files.
const images = root + webroot + config.paths.images

// Production SVG/Sprite files.
const sprites = root + webroot + config.paths.sprites

// Miscellaneous ---------------------------------------------------------------

// Sass variables that will be passed before compiling.
const sassVariables = config['sass-injections']['variables'] || []

// Sass imports that will be passed before compiling.
const sassImports   = config['sass-injections']['imports'] || []

// List of unaltered filename
const filenames = config.filenames

// Boolean to determine wether popups should for Gulp tasks
const notifcations = environment == 'dev'

// Image to use for notifications
const icon = config.icon || 'icon.png'

// Map directory name that will be exlcuded from versioning relative to css and js output paths
const maps = 'maps'

// =============================================================================
// Watchers
// =============================================================================

gulp.task('serve', ['default'], () => {

  if ( environment == 'dev' ) {

    browserSync.init({
      watchTask : true,
      open      : "external",
      proxy     : host,
      host      : host,
      notify    : false,
      port      : config.port || 3000,
      injectChanges : true
    });

    for (const watcher of Object.values(config.watchers)) {
      if ( watcher.reload ) {
        gulp.watch(watcher.patterns, [watcher.tasks]).on('change', browserSync.reload);
      } else {
        gulp.watch(watcher.patterns, [watcher.tasks])
      }

    }

  } else {

    log(chalk.red("You can only run Gulp Serve in a local development environment."));

    return false;

  }

});

// An alias for the serve task.
gulp.task('watch', ['serve']);

// =============================================================================
// Project Scripts
// =============================================================================

gulp.task('scripts', ['ES5'], () => {

  let filename = filenames.js.scripts;

  if (versioning) {
    filename = versioniser.update(js, filename, 'scripts', !ES5Support);
  }

  if (minify) {
    filename = filename.replace('.js', '.min.js');
  }

  return gulp.src(config.sources.scripts)
    .pipe(gulpif(notifcations, source(config.sources.scripts)))
    .pipe(plumber({errorHandler: notifier.error }))
    .pipe(gulpif(sourceMaps, sourcemaps.init()))
    .pipe(concat(filename))
    .pipe(gulpif(minify, uglify()))
    .pipe(gulpif(sourceMaps, sourcemaps.write(maps)))
    .pipe(gulp.dest(js))
    .pipe(notifier.success('scripts'))
    .pipe(gulpif(versioning, rename(filenames.js.scripts)))
    .pipe(gulpif(versioning, gulp.dest(js)))
    .pipe(browserSync.stream())

});

// An alias for the scripts task.
gulp.task('js', ['scripts']);

// =============================================================================
// Vendor Scripts
// Third party resources that shouldn't be altered in any way. Only minification.
// =============================================================================

gulp.task('vendors', () => {

  let filename = filenames.js.vendors;

  if ( versioning ) {
    filename = versioniser.update(js, filename, 'vendors')
  }

  if ( minify ) {
    filename = filename.replace('.js', '.min.js')
  }

  return gulp.src(config.sources.vendors)
    .pipe(gulpif(notifcations, source(config.sources.vendors)))
    .pipe(concat(filename))
    .pipe(gulpif(minify, uglify()))
    .pipe(gulp.dest(js))
    .pipe(notifier.success('vendors'))
    .pipe(gulpif(versioning, rename(filenames.js.vendors)))
    .pipe(gulpif(versioning, gulp.dest(js)))

});

// An alias for the vendor task.
gulp.task('core', ['vendors']);

// =============================================================================
// Sass
// =============================================================================

gulp.task('sass', () => {

  const processors = [
    autoprefixer(),
    postcssAssets({loadPaths: [images]}),
    postcssInlineSvg({path:images}),
  ];

	if ( config.settings.symbols ) {
		sassImports.push(filenames.sass.symbols);
	}

  return gulp.src(config.sources.sass)
  .pipe(gulpif(sassVariables.length || sassImports.length, injectScss(sassVariables, sassImports)))
  .pipe(gulpif(sourceMaps, sourcemaps.init()))
  .pipe(plumber({errorHandler: notifier.error }))
  .pipe(gulpsass({outputStyle: (minify ? 'compressed' : 'nested')}))
  .pipe(postcss(processors))
  .pipe(gulpif(combineCSS, concat(filenames.css.combined)))
  .pipe(gulpif(sourceMaps, sourcemaps.write(maps)))
  .pipe(gulpif(versioning, gulp.dest(css)))
  .pipe(gulpif(versioning, versioniser.updater({destination:css, variable:'css', exclusions:'.map'}) ))
  .pipe(gulp.dest(css))
  .pipe(notifier.success('sass'))
  .pipe(browserSync.stream())

});

// Aliases for the sass task.
gulp.task('css', ['sass']);
gulp.task('scss', ['sass']);

// =============================================================================
// SVG symbols
// =============================================================================

gulp.task('symbols', () => {

  if (config.settings.symbols) {

    let symbolFiles = config.sources.symbols;
        symbolFiles[symbolFiles.length] = '!' + (webroot + images).replace("//", "/") + filenames.svg.symbols;

    let settings = {
      sanitise : true,
      prefix   : filenames.svg.prefix || 'icon',
      exclude  : filenames.svg.exclusions || [],
      scss     : sass + filenames.sass.symbols
    };

    return gulp.src(symbolFiles)
    .pipe(symbols(settings))
    .pipe(concat('symbols.svg'))
    .pipe(gulp.dest(images))
    .pipe(notifier.success('symbols', {extra : sass + filenames.sass.symbols}))

  }

});

// An alias for the symbols task.
gulp.task('svg', ['symbols']);

// =============================================================================
// ECMAScript (ES5) Tasks
// Required for browsers that don't support ES6 ( Internet Explorer 11 & Safari 9 )
// =============================================================================

gulp.task('ES5', () => {

  if (!ES5Support) {
    log(chalk.yellow("ES5 Scripts task was skipped"));
    return false;
  }

  let filename = filenames.js.scripts.replace('.js', '.es5.js');

  if (versioning) {
    filename = versioniser.update(js, filename, 'scripts', true);
  }

  if (minify) {
    filename = filename.replace('.js', '.min.js');
  }

  return gulp.src(config.sources.scripts)
    .pipe(plumber({errorHandler: notifier.error }))
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(concat(filename))
    .pipe(gulpif(minify, uglify()))
    .pipe(gulp.dest(js))
    .pipe(notifier.success('scripts', {suffix:'with ES5 transpilation'}))
    .pipe(gulpif(versioning, rename(filenames.js.scripts.replace('.js', '.es5.js'))))
    .pipe(gulpif(versioning, gulp.dest(js)))

});

// An alias for the ES5 task.
gulp.task('es5', ['ES5']);

// =============================================================================
// Notification message settings
// =============================================================================

notifier.defaults({
  project    : project,
  success    : icon,
  popups     : environment == 'dev',
  suffix     : 'successfully',
  exclusions : '.map',
  messages : {
    scripts  : 'Javascript files ' + (versioning ? 'versionised' : 'compiled'),
    vendors  : 'Vendor script files ' + (versioning ? 'versionised' : 'compiled'),
    symbols  : 'Symbol files compiled',
    sass     : 'SASS files ' + (combineCSS ? (versioning ? 'combined and versionised' : 'combined') : (versioning ? 'versionised' : 'compiled')),
  }
});

// =============================================================================
// Config settings task
// =============================================================================

gulp.task('config', () => {
  console.log(JSON.stringify(config, null, 2));
})

// =============================================================================
// Default task
// =============================================================================

gulp.task('default', () => {
  sequence(['vendors', 'scripts', 'symbols'], ['sass'])((err) => {
    if (!err) {
      return log(chalk.green("All gulp tasks completed"));
    } else {
      console.log(err)
    }
  })
});
