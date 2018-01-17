const	gulp= require('gulp'),
		runSequence= require('run-sequence');

gulp.task('build', (callback)=>{
	return runSequence('clean', ['webpack', 'ejs', 'sass', 'copy'], callback);
});
