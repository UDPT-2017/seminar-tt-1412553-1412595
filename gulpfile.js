var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var htmlmin = require('gulp-minify-tml');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-minify-html');
var uglifyjs = require('uglify-js');
var minifier = require('gulp-uglify/minifier');
var pump = require('pump');
gulp.task('default', function()
{

});
gulp.task('server', function()
{
  browserSync({
    notify: false,
    server: {
      baseDir: './app'
    }
  })
  gulp.watch(['app/*.html'], reload);
  gulp.watch(['app/*.css'], reload);
  gulp.watch(['app/*.js'], reload);
  gulp.watch(['app/*.scss'], reload);
});
gulp.task('html', function()
{
   gulp.src('app/**/*.html')
   .pipe(concat('MinifyHTML.html'))
   .pipe(htmlmin())
   .pipe(gulp.dest('dist/html'));
});

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
gulp.task('minify', ['html','css', 'js','sass'], function()
{

});