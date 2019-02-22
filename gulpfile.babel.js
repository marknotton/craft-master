
// ////////////////////////////////////////////////////////////////////////////////
// // Gulp File
// ////////////////////////////////////////////////////////////////////////////////
//
// // =============================================================================
// // Global Requirements
// // =============================================================================
//
import gulp      from 'gulp'                       // Gulp.
import log       from '@marknotton/lumberjack'     // CLI logging.
import notifier  from '@marknotton/notifier'       // Manage notification messages and other aesthetics.
// import tasks from './gulp'

// gulp.task('default', (resolved) => {
// 	console.log("FDGDFG")
// 	resolved()
// })
// // =============================================================================
// // Tasks
// // =============================================================================
//
// gulp.task(sass)
// gulp.task(scripts)
// gulp.task(vendors)
// gulp.task(es5)
// gulp.task(symbols)
// gulp.task(serve)
// gulp.task('configs', gulp.parallel(configs.output))
//
// // =============================================================================
// // Default task
// // =============================================================================
//
// // const defaultTasks = gulp.series(vendors, scripts, symbols, sass, () => {
// const default = gulp.series(scripts, vendors, symbols, sass, callback => {
// 	configs.render = false
// 	log('Done:', "All Gulp tasks completed")
// 	if ( !configs.watching ) { log.render() }
// 	callback()
// })
//
// default.displayName = 'default';
// default.description = 'Run all task';
//
// export default default
