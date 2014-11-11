var gulp = require('gulp')
  , less = require('gulp-less')
  , path = require('path')
  , minifyCSS = require('gulp-minify-css')
  , autoprefixer = require('gulp-autoprefixer')
  , serve = require('gulp-serve')


gulp.task('styles', function() {
  gulp.src('./styles/*.less')
    .pipe(less())
    .pipe(autoprefixer({
          browsers: ['> 5%', 'last 5 versions', 'Firefox ESR', 'Opera 12.1', 'ios 6'],
          cascade: true
      }))
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
