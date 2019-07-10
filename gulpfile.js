var gulp = require('gulp'),
    sass = require('gulp-sass')

gulp.task('sass', function() {
   return gulp.src('sass/style.scss')
       .pipe(sass())
       .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
   gulp.watch('sass/style.scss', gulp.task('sass'));
});
