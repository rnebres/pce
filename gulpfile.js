// declare all gulp resources
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	gutil = require('gulp-util'),
	sourcemaps = require('gulp-sourcemaps');


var source = {
	"css":"source/assets/scss/**/*.scss",
	"js":"source/assets/js/**/*.js",
	"angular":"source/app/**/*",
	"fonts":"source/assets/fonts/**/*",
	"html":"source/*.html"
}

var destination = {
	"css":"public/assets/css",
	"css2":"source/assets/css",
	"js":"public/assets/js",
	"angular":"public/app",
	"fonts":"public/assets/fonts",
	"html":"public"
}

// default task
gulp.task('default',['watch','copyJS','copyAngular','copyFonts','copyHtml']);

gulp.task('copyJS',function(){
	return gulp.src(source.js)
		.on('error', gutil.log)
		.pipe(gulp.dest(destination.js));
});
gulp.task('copyAngular',function(){
	return gulp.src(source.angular)
		.on('error', gutil.log)
		.pipe(gulp.dest(destination.angular));
});
gulp.task('copyFonts',function(){
	return gulp.src(source.fonts)
		.on('error', gutil.log)
		.pipe(gulp.dest(destination.fonts));
});
gulp.task('copyHtml',function(){
	return gulp.src(source.html)
		.on('error', gutil.log)
		.pipe(gulp.dest(destination.html));
});


// gulp-sass task: convert sass to css
gulp.task('sass-css',function(){
	return gulp.src(source.css)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		// .on('error', gutil.log)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(destination.css))
		.pipe(gulp.dest(destination.css2));
});

// watch task: listen for changes to different tasks
gulp.task('watch',function(){
	gulp.watch(source.css,['sass-css']);
	gulp.watch(source.js,['copyJS']);
	gulp.watch(source.angular,['copyAngular']);
	gulp.watch(source.fonts,['copyFonts']);
	gulp.watch(source.html,['copyHtml']);
});