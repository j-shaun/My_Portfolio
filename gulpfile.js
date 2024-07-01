var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    concat = require('gulp-concat');
    jshint = require('gulp-jshint');
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
    return gulp.src('styles/*.scss')
    .pipe(sass({
    'sourcemap=none' : true   
    }))
    .pipe(concat('style.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('style/'))
});

gulp.task('watch', function(){
    gulp.watch('style/*.scss', ['styles']);
    gulp.watch('js/*.js', ['jshint']);
});

gulp.task('jshint', function(){
    return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('default', ['styles', 'jshint', 'watch']);