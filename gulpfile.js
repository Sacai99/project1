const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const less = require('gulp-less');
const path = require('path');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
// const imagemin = require('gulp-imagemin');

const sprite = require('gulp.spritesmith');
const concat = require('gulp-concat');

gulp.task('htmlmin', () => {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
});
gulp.task('cssmin', () => {
    return gulp.src('./src/css/**/*.css')
        .pipe(cssmin())
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
});



gulp.task('jsmin', () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
});
// 7. 文件合并
// gulp-concat
// $ cnpm i gulp-concat -D
gulp.task('concatjs', () => {
    return gulp.src(['./src/js/jquery.js', './src/js/index.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./src/js'));
});

gulp.task('watchless', () => {
    gulp.watch('./src/less/**/*.less', gulp.series('less'));
});

// 8. 自动项目构建
gulp.task('dev', () => {
    gulp.watch(
        ['./src/less/**/*.less', './src/html/*.html', './src/js/**/*.js'],
        gulp.series('htmlmin', 'concatjs', 'less', 'cssmin', 'jsmin')
    );
});