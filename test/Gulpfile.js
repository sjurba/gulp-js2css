'use strict';
var gulp = require('gulp');
var js2css = require('gulp-js2css');

gulp.task('default', function() {
    return gulp.src('src/**/*.css.js')
        .pipe(js2css())
        .pipe(gulp.dest('dist'));
});