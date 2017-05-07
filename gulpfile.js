var gulp = require('gulp');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var uglifyjs = require('uglify-js');
var minifier = require('gulp-uglify/minifier');
var pump = require('pump');
var imagemin = require('gulp-imagemin');


gulp.task('js', function (cb) {
  var options = {
    preserveComments: 'license'
  };
 
  pump([
      gulp.src('app/js/*.js'),
      minifier(options, uglifyjs),
      gulp.dest('dist/js')
    ],
    cb
  );
});
gulp.task('css', function()
{
	gulp.src('app/css/*.css')
	.pipe(concat('MinifyCSS.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css'));
});
gulp.task('sass', function()
{  
    gulp.src('app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/sass'));
});

gulp.task('imagemin', () =>
  gulp.src('app/img/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({plugins: [{removeViewBox: true}]})
    ]))
    .pipe(gulp.dest('dist/images'))
);


gulp.task('minify', ['html','css', 'js','sass'], function()
{

});