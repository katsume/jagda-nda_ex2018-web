const	path= require('path'),
			webpack= require('webpack');

const	src= './src',
			dest= './build';

module.exports= {
	dest: dest,
	webpack: {
		src: src+'/js/**',
		entry: [
			src+'/js/index.js'
		],
		webpack: {
			module: {
				loaders: [
					{
						test: /\.js?$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
							presets: ['@babel/preset-env']
						}
					}
				]
			},
			resolve: {
			},
			plugins: [
			]
		},
		dest: dest+'/js'
	},
	ejs: {
		path: src,
		watch: src+'/ejs/**/*.(html|ejs|json)',
		src: [src+'/ejs/**/*.html', '!'+src+'/ejs/**/_*.ejs'],
		dest: dest
	},
	copy: {
		src: src+'/www/**',
		dest: dest
	},
	sass: {
		src: src+'/sass/**/*.scss',
		sass: {
			style: 'expanded'
		},
		dest: dest+'/css'
	}
}
