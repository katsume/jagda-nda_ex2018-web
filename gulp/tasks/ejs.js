const	path= require('path');
			// fs= require('fs');

const	gulp= require('gulp'),
			plumber= require('gulp-plumber'),
			// through= require('through2'),
			ejs= require('gulp-ejs'),
			config= require('../config').ejs;

// const	appendData= ()=>{
// 	return through.obj((file, enc, cb)=>{
//
// 		file.data= Object.assign(
// 			{
// 			},
// 			JSON.parse(fs.readFileSync(path.resolve(config.path, './ejs/_data.json')))
// 		);
//
// 		cb(null, file);
// 	});
// };

gulp.task('ejs', ()=>{
	return gulp.src(config.src)
		.pipe(plumber())
		// .pipe(appendData())
		.pipe(ejs())
		.pipe(gulp.dest(config.dest));
});
