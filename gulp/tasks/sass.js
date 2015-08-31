var gulp= require('gulp'),
	sass= require('gulp-ruby-sass'),
	config= require('../config').sass;

gulp.task('sass', function(){
	return sass(config.src, config.sass)
		.on('error', function (err) {
			console.error('Error', err.message);
		})
		.pipe(gulp.dest(config.dest))
});
