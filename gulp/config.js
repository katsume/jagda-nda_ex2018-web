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
						exclude: /(node_modules|bower_components)/,
						loader: 'babel',
						query: {
						}
					}
				]
			}
		},
		dest: dest+'/js'
	},
	copy: {
		src: src+'/www/**',
		dest: dest
	},
	sass: {
		src: src+'/sass/',
		sass: {
			style: 'expanded'
		},
		dest: dest+'/css'
	}
}
