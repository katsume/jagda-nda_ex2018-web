var gulp= require('gulp'),
    plumber= require('gulp-plumber'),
    ejs= require('gulp-ejs'),
	config= require('../config').ejs;

gulp.task('ejs', function(){
	return gulp.src(config.src)
        .pipe(plumber())
        .pipe(ejs(config.options, config.settings))
		.pipe(gulp.dest(config.dest));
});
