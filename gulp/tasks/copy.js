const	gulp= require('gulp'),
		config= require('../config').copy;

gulp.task('copy', ()=>{
	return gulp.src(config.src)
		.pipe(gulp.dest(config.dest));
});
