var gulp = require('gulp')
  , less = require('gulp-less')
  , path = require('path')
  , minifyCSS = require('gulp-minify-css')
  , serve = require('gulp-serve')


gulp.task('styles', function() {
  gulp.src('./styles/*.less')
    .pipe(less())
    //.pipe(minifyCSS({noAdvanced:true, keepSpecialComments: 0}))
    .pipe(gulp.dest('./styles/'));
});

gulp.task('serve', serve({
    root: path.resolve('./'),
    port: 3001
}));

gulp.task('default', ['styles', 'serve'], function(){
  gulp.watch('./styles/*.less', ['styles']);
});
