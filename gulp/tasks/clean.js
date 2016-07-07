var gulp= require('gulp'),
	del= require('del'),
	config= require('../config');

gulp.task('clean', (callback)=>{
	del([config.dest]).then(()=>{
		callback();
	});
});
