var gulp    = require('gulp'),
	uglify  = require('gulp-uglify'),
	concat  = require('gulp-concat'),
	minifycss = require('gulp-minify-css');


gulp.task('javascripts', function () {
    gulp.src('./assets/js/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets'));
});

gulp.task('stylesheets', function () {
    gulp.src('./assets/css/*.css')
    	.pipe(concat('app.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./assets'));
});


gulp.task('default', ['javascripts','stylesheets']);