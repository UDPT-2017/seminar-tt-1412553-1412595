var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var uglifyjs = require('uglify-js');
var minifier = require('gulp-uglify/minifier');
var pump = require('pump');
gulp.task('default', function()
{

});
gulp.task('js', function (cb) {
  // the same options as described above 
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
gulp.task('minify', ['css', 'js','sass'], function()
{

});