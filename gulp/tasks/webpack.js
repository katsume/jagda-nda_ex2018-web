var gulp= require('gulp'),
	named= require('vinyl-named'),
	webpack= require('webpack-stream'),
	config= require('../config').webpack

gulp.task('webpack', function(){
	return gulp.src(config.entry)
		.pipe(named())
		.pipe(webpack(config.webpack))
		.pipe(gulp.dest(config.dest));
});
