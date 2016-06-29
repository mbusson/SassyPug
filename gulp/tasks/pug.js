'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var gutil = require('gulp-util');

gulp.task('pug', function() {
    gulp.src('pug/**/*.pug')
        .pipe(pug().on('error', gutil.log))
        .pipe(gulp.dest('templates/'))
});