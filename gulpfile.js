/*jshint esversion: 6 */

const gulp = require('gulp');
const pump = require('pump');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('js', cb => {
	pump([
		gulp.src(['./js/angular-material-datetimepicker.js']),
		sourcemaps.init(),
		uglify(),
		rename({extname: '.min.js'}),
		sourcemaps.write(''),
		gulp.dest('./dist/')
	], cb);
});

gulp.task('css', cb => {
	pump([
		gulp.src(['./css/material-datetimepicker.css']),
		cleanCSS(),
		rename({extname: '.min.css'}),
		gulp.dest('./dist/')
	], cb);
});

gulp.task('default', gulp.parallel('js', 'css'));
