'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');

gulp.task('sass', function() {
    gulp.src('assets/scss/main.scss')
        .pipe(sass().on('error', gutil.log))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleancss())
        .pipe(rename("app.min.css"))
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());

/*    gulp.src(['assets/scss/ie9.scss', 'assets/scss/editor-style.scss'])
        .pipe(sass().on('error', handleErrors))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleancss())
        .pipe(gulp.dest('build/')) */
});