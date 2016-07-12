var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    fs = require('fs'),
    livereload = require('gulp-livereload');

var version = require('./package.json').version;
var baseDir = '.';

gulp.task('css', function() {
    try {
        return gulp.src('css/*.*')      //压缩的文件
            .pipe(concat('all.css'))           //合并
            .pipe(less())                 //执行压缩
            .pipe(minifycss())                 //执行压缩
            .pipe(gulp.dest(`${baseDir}/build/${version}`));         //输出文件夹
    }catch (e){
        return null;
    }
});

gulp.task('mini',function(){
   return gulp.src(`${baseDir}/build/${version}/all.css`)
    .pipe(less())
    .pipe(minifycss()).pipe(gulp.dest(`${baseDir}/build/${version}`));
});

gulp.task('js', function() {
    return gulp.src('js/lib/react*.min.js')      //压缩的文件
        .pipe(gulp.dest(`${baseDir}/build`));         //输出文件夹
});

gulp.task('img', function() {
    return gulp.src('images/**')      // 图片
        .pipe(gulp.dest(`${baseDir}/build/images`))
});

gulp.task('package', function() {
    baseDir = '.';
    gulp.start('css');
});

gulp.task('watch', function () {
    gulp.watch('css/**/*.*', function () {
        gulp.start('css');
    });
    var server = livereload();
    gulp.watch('build/**/*.*', function (file) {
        server.changed(file.path);
    });
    gulp.watch('*.html', function (file) {
        server.changed(file.path);
    });
});

gulp.task('default', function() {
    gulp.start('js', 'css', 'img', 'watch');
});