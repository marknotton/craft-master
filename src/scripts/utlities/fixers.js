/**
 * Apply common fixes
 * @constructor
 * @param {args} methods - List of methods you want to include. Leave blank to apply all methods
 * @example new Fixers(); // Runs all fixers
 * @example new Fixers('featuredImages', 'links') // Runs only the fastclick and links fixers;
 */

class Fixers {
  constructor () {
    let $this = this;

    let fixes = [];

    // Get a list of all methods in this fixer class
    let allFixes = Object.getOwnPropertyNames(this.constructor.prototype).slice(1);

    // Get a list of any arguments passed
    let args = Array.prototype.slice.call(arguments);

    // Define fixes that exist and were passed into the original class as strings
    if ( args.length ) {
      args.forEach(function (value) {
        if ( allFixes.includes(value) ) {
          fixes.push(value);
        }
      });
    } else {
      // If no arguments were passed, run all fixes.
      fixes = allFixes;
    }

    // Run fixer functions
    fixes.forEach(function (method) {
      $this[method](this);
    })

  }

	//============================================================================
  // Add 'srcset' fallback for IE and Edge browsers when using feature-images custom elements
	//============================================================================

  images (customElement = 'figure[image]') {
    if (typeof browser !== 'undefined' ) {
      if( 'objectFit' in document.documentElement.style !== false ) {
        $(customElement).each(function() {
          var $this = $(this);
          if ( $this.attr('data-desktop') || $this.attr('data-mobile')) {
            $this.css('background-image', 'url('+(mobile ? $this.data('mobile') : $this.data('desktop'))+')').find('img').hide();
          }
        })
      }
    }
  }

	//============================================================================
  // Force external links and documents to open in new tabs securely.
	//============================================================================

  links () {
    $('a').each(function() {
      let a = new RegExp('/' + window.location.host + '/')
			let extensions = ['doc', 'docx', 'odt', 'pdf', 'xls', 'xlsx', 'ods', 'ptt', 'pptx', 'txt']
			let isDocument = extensions.some((ext) => this.href.endsWith(ext));

      if (!a.test(this.href) || isDocument) {
        if (!this.href.startsWith('callto') && !this.href.startsWith('tel') && !this.href.startsWith('mailto') && !this.href.startsWith('skype') && !this.href.endsWith('.pdf') || isDocument) {
          $(this).attr({'rel': 'noopener', 'target': '_blank'});
        }
      }
    });
  }

	//============================================================================
	// Wrap all iframe videos witinh a div element
	//============================================================================

  videos (containerClass = 'video-container') {
    $('iframe[src*="youtube"], iframe[src*="vimeo"]').each(function() {
      if(!$(this).parent().hasClass(containerClass) && !$(this).parent().prop("tagName") == 'VIDEO-CONTAINER') {
        $(this).wrap("<div class='"+containerClass+"'></div>");
      }
    });
  }

	//============================================================================
	// Disable Console Logging on Production Environments for non-admins.
	//============================================================================

	logging () => {
		if ( document.body.classList.contains('production-environment') && !document.body.classList.contains('admin') ) {

		  window['_logger'] = { status : true, old : null };

		  Object.defineProperty(window, 'logger', {
		    get : () => {
		      return window._logger.status;
		    },
		    set : (value = true) => {
		      if ( typeof value == 'boolean') {
		        window._logger.status = value;
		        if (value) {
		          // Enable Logger
		          if(window._logger.old == null) { return; }
		          window['console']['log'] = window._logger.old;
		        } else {
		          // Disable Logger
		          window._logger.old = console.log;
		          window['console']['log'] = function() {};
		        }
		      }
		    }
		  });

		  logger = false;

		}
	}

}
