var path= require('path'),
	webpack= require('webpack');

var src= './src',
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
						loader: 'babel',
						query: {
							presets: ['es2015']
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
