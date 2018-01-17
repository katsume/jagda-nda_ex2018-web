const	gulp= require('gulp'),
		sass= require('gulp-ruby-sass'),
		config= require('../config').sass;

gulp.task('sass', ()=>{
	return sass(config.src, config.sass)
		.on('error', (err)=>{
			console.error('Error', err.message);
		})
		.pipe(gulp.dest(config.dest))
});
