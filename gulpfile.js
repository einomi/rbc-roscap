'use strict';

var gulp				= require('gulp'),
	argv				= require('yargs').argv,
	gulpif				= require('gulp-if'),
	watch				= require('gulp-watch'),
	sass				= require('gulp-sass'),
	sourcemaps			= require('gulp-sourcemaps'),
	rigger				= require('gulp-rigger'),
	cssmin				= require('gulp-clean-css'),
	imagemin			= require('gulp-imagemin'),
	pngquant			= require('imagemin-pngquant'),
	rimraf				= require('gulp-rimraf'),
	browserSync			= require('browser-sync'),
	reload				= browserSync.reload,
	postcss				= require('gulp-postcss'),
	autoprefixer		= require('autoprefixer'),
	sprites				= require('postcss-sprites'), //.default,
	assets				= require('postcss-assets'),
	svgstore			= require('gulp-svgstore'),
	svgmin				= require('gulp-svgmin'),
	rename				= require('gulp-rename'),
	gutil 				= require('gulp-util'),
	webpackStream 		= require('webpack-stream'),
	named 				= require('vinyl-named'),
	historyApiFallback	= require('connect-history-api-fallback'),
	runSequence			= require('run-sequence');


var PRODUCTION = argv.production;

var PATHS = {
	build: {
		html:	 'build/',
		js:		 'build/media/js/',
		css:	 'build/media/css/',
		img:	 'build/media/img/',
		fonts:	 'build/media/fonts/',
		sprites: 'build/media/img/sprites/',
		svg:	 'build/media/svg/',
		video:	 'build/media/video/'
	},
	src: {
		html:	 'app/src/*.html',
		js:		 ['app/src/index.js'],
		style:	 'app/media/sass/screen.sass',
		img:	 'app/media/img/**/*.*',
		fonts:	 'app/media/fonts/**/*.*',
		sprites: 'app/media/img/sprites/*.png',
		svg:	 'app/media/svg/**/*.svg',
		video:	 'app/media/video/**/*.*'
	},
	watch: {
		html:	 'app/src/**/*.html',
		js:		 'app/src/**/*.jsx',
		style:	 'app/media/sass/**/*.sass',
		img:	 'app/media/img/**/*.*',
		fonts:	 'app/media/fonts/**/*.*',
		sprites: 'app/media/img/sprites/*.png',
		svg:	 'app/media/svg/**/*.svg'
	},
	clean: './build'
};

var CONFIG = {
	browserSync: {
		server: {
			baseDir: './build'
		},
		tunnel: false,
		host: 'localhost',
		port: 9000,
		logPrefix: 'SP.Starter',
		open: false,
		middleware: [ historyApiFallback() ]
	},
	sourcemaps: {
		css: true,
		js: false
	},
	compress: {
		css: false,
		js: false,
		img: true
	}
};

if (PRODUCTION) {
	CONFIG.sourcemaps = {
		css: false,
		js: false
	};
	CONFIG.compress = {
		css: true,
		js: true,
		img: true
	};
}

gulp.task('webserver', function () {
	browserSync(CONFIG.browserSync);
});

gulp.task('clean', function () {
	return gulp.src(PATHS.clean, {read: false})
		.pipe(rimraf({ force: true }));
});

gulp.task('html:build', function () {
	gulp.src(PATHS.src.html)
		.pipe(rigger({tolerant: true}))
		.pipe(gulp.dest(PATHS.build.html))
		.pipe(reload({stream: true}));
});

gulp.task('style:build', function () {

	var processors = [
		autoprefixer({
			browsers: ['last 4 versions'],
			cascade: true
		}),
		assets({
			basePath: 'src/',
			baseUrl: '../',
			loadPaths: ['media/img/']
		}),
		sprites({
			stylesheetPath: './build/media/css/',
			spritePath: './build/media/img/sprite.png',
			retina: true,
			outputDimensions: true,
			padding: 4,
			filterBy: function (image) {
				// Create sprite for ../sprites/ directory only
				return /sprites\/.*\.png$/gi.test(image.url);
			}
		})
	];

	gulp.src(PATHS.src.style)
		.pipe(gulpif(CONFIG.sourcemaps.css, sourcemaps.init()))
		.pipe(sass({
			outputStyle: 'compact',
			sourceMap: false,
			errLogToConsole: true,
			indentedSyntax: true
		}).on('error', function (err) {
			console.error('Error: ', err.message);
		}))
		.pipe(postcss(processors))
		.pipe(gulpif(CONFIG.compress.css, cssmin({processImport: false})))
		.pipe(gulpif(CONFIG.sourcemaps.css, sourcemaps.write()))
		.pipe(gulp.dest(PATHS.build.css))
		.pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
	gulp.src(PATHS.src.img)
		.pipe(gulpif(CONFIG.compress.img, imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		})))
		.pipe(gulp.dest(PATHS.build.img));
});

gulp.task('fonts:build', function () {
	gulp.src(PATHS.src.fonts)
		.pipe(gulp.dest(PATHS.build.fonts));
});

gulp.task('svg:build', function () {
	return gulp.src(PATHS.src.svg)
		.pipe(svgmin())
		.pipe(rename({prefix: 'icon-'}))
		.pipe(svgstore({ inlineSvg: true }))
		.pipe(rename('sprite.svg'))
		.pipe(gulp.dest(PATHS.build.svg));
});

gulp.task('webpack', function (callback) {
	var firstBuildReady = false;
	var webpackConfig = require('./webpack.config.js');
	var defaultStatsOptions = {
		colors: gutil.colors.supportsColor,
		hash: false,
		timings: false,
		chunks: false,
		chunkModules: false,
		modules: false,
		children: true,
		version: true,
		cached: false,
		cachedAssets: false,
		reasons: false,
		source: false,
		errorDetails: false
	};
	function done(err, stats) {
		firstBuildReady = true;
		if (err) {
			return;
		}
		gutil.log(stats.toString(defaultStatsOptions));
	}
	return gulp.src(PATHS.src.js)
		.pipe(named())
		.pipe(webpackStream(webpackConfig, null, done))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest(PATHS.build.js))
		.on('data', function () {
			if (!PRODUCTION) {
				if (firstBuildReady && !callback.called) {
					callback.called = true;
					callback();
				}
				reload();
			}
		});
});


gulp.task('watch', function () {
	watch([PATHS.watch.html], function (event, cb) {
		gulp.start('html:build');
	});
	watch([PATHS.watch.style], function (event, cb) {
		gulp.start('style:build');
	});
	watch([PATHS.watch.img], function (event, cb) {
		gulp.start('image:build');
	});
	watch([PATHS.watch.svg], function (event, cb) {
		gulp.start('svg:build');
	});
	watch([PATHS.watch.fonts], function (event, cb) {
		gulp.start('fonts:build');
	});
});


var buildDeps = [
	'html:build',
	'style:build',
	'fonts:build',
	'image:build',
	'svg:build',
	'webpack'
];
if (PRODUCTION) {
	gulp.task('build', function() {
	  	runSequence('clean', buildDeps);
	});
} else {
	gulp.task('build', buildDeps);
}

gulp.task('default', ['build', 'webserver', 'watch']);
