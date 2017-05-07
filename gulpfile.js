var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
gulp.task('css', function()
{
	gulp.src('app/css/*.css')
	.pipe(concat('MinifyCSS.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css'));
});
gulp.task('minify', ['css'], function()
{

});