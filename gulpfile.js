'use strict';

const gulp = require('gulp'),
      imageFy = require('gulp-imagemin'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync');

const sassConf = { outputStyle: 'compressed', errorLogToConsole: true };

gulp.task('sass', () => {
  gulp.src('./_sass/*.scss')
  .pipe(sass(sassConf))
  .pipe(gulp.dest('./css'));
} );

gulp.task('images', ['images:avatars', 'images:gallery']);
// Task to minify team pictures
gulp.task('images:avatars', () => {
  gulp.src('./assets/img/avatars/*')
  .pipe(imageFy())
  .pipe(gulp.dest('./img/team'));
});

gulp.task('images:gallery', () => {
  gulp.src('./assets/img/gallery/*')
  .pipe(imageFy())
  .pipe(gulp.dest('./img/gallery'));
});

gulp.task('scripts', ['scripts:vendors', 'scripts:main']);

gulp.task('browserSync', (cb) => {
  browserSync({
    server: {
      baseDir: '_site'
    },
    port: 4000,
    notify: true,
    open: false
  }, cb);
});

gulp.task('default', ['sass', 'images', 'browserSync'], () => { // Arrow functions!!
   gulp.watch('./_sass/*.scss', ['sass'])
   gulp.watch('./assets/img/*', ['images'])
    .on('change', (e) => {
      console.log(`File ${e.path} was ${e.type}, Building DOF assets...`); 
    });
 });