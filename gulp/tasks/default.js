const	gulp= require('gulp'),
			runSequence= require('run-sequence');

gulp.task('default', (callback)=>{
	return runSequence('build', 'watch', callback);
});
