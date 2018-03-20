const	gulp= require('gulp'),
			plumber= require('gulp-plumber'),
			named= require('vinyl-named'),
			webpack= require('webpack-stream'),
			config= require('../config').webpack;

gulp.task('webpack', ()=>{
	return gulp.src(config.entry)
		.pipe(plumber())
		.pipe(named())
		.pipe(webpack(config.webpack))
		.pipe(gulp.dest(config.dest));
});
