var path= require('path'),
	webpack= require('webpack');

var src= './src',
	dest= './build';

module.exports= {
	dest: dest,
	ejs: {
		watch: src+'/ejs/**/*.ejs',
		src: [src+'/ejs/**/*.ejs', '!'+src+'/ejs/**/_*.ejs'],
		options: {
		},
		settings: {
			ext: ".html"
		},
		dest: dest
	},
	webpack: {
		src: src+'/js/**',
		entry: [
			src+'/js/script.js'
		],
		webpack: {
			module: {
				loaders: [
					{
						test: /\.js?$/,
						exclude: /(node_modules|bower_components)/,
						loader: 'babel',
						query: {
							presets: ['es2015']
						}
					}
				]
			},
			resolve: {
				root: [path.join(__dirname, "../bower_components")]
			},
			plugins: [
				new webpack.ResolverPlugin(
					new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
				)
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
