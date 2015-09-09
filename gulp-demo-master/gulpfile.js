var	gulp	= require('gulp'),
	gutil	= require('gulp-util'),
	uglify  = require('gulp-uglify'),
	concat  = require('gulp-concat');
	jshint  = require('gulp-jshint');

var path = {
	'script':'./js',
	'devScript':'./js_workspace',
};

//js 語法檢查
gulp.task('lint', function () {
    gulp.src(path.devScript+'/*.js')
        .pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

//js file 壓縮與合併
gulp.task('js_compress', function () {
    gulp.src(path.devScript+'/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest(path.script));
});

gulp.task('default', ['lint', 'js_compress']);