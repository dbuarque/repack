/**
 * Created by dbuarque on 1/24/16.
 */
'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp.src(['lib/*.js', './*.js', './bin/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watch', function () {
    gulp.watch(['lib/*.js','qa/*.js', 'app/*.js'], ['lint']);
});

gulp.task('default', ['lint', 'watch']);