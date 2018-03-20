const	path= require('path'),
			gulp= require('gulp'),
			watch= require('gulp-watch')
			runSequence= require('run-sequence'),
			config= require('../config');

gulp.task('watch', ()=>{

	watch(path.relative('.', config.webpack.src), ()=>{
		return runSequence('webpack');
	});

	watch(path.relative('.', config.ejs.watch), ()=>{
		return runSequence('ejs');
	});

	watch(path.relative('.', config.sass.src), ()=>{
		return runSequence('sass');
	});

	watch(path.relative('.', config.copy.src), ()=>{
		return runSequence('copy');
	});

});
