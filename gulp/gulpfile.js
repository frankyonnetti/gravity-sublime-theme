'use strict'

// Load modules
var gulp          = require('gulp'),
    autoPrefixer  = require('gulp-autoprefixer'),
    browserSync   = require('browser-sync').create(),
    notify        = require('gulp-notify'),
    sass          = require('gulp-sass'),
    sourceMaps    = require('gulp-sourcemaps')
    // uglify        = require('gulp-uglify')

// variable paths
var src = {
    // js:      '../js/scripts.js',
    // jsmin:   '../js/min/',
    scss:    '../scss/styles.scss',
    css:     '../css'
}

// Minify JS
// gulp.task('uglify', function () {
//   gulp.src(src.js)
//     .pipe(uglify()).on('error', function (err) {
//       console.log(err.toString())
//       this.emit('end')
//     })
//     .pipe(gulp.dest(src.jsmin))
//     .pipe(browserSync.stream({once: true}))
//     .pipe(notify({message: 'JS uglified', onLast: true}))
// })

// Scss : expanded, nested, compact or compressed
gulp.task('sass', function () {
  return gulp.src(src.scss)
    .pipe(sourceMaps.init())
    .pipe(sass({
      outputStyle: 'nested'
    }).on('error', function (err) {
      console.log(err.toString())
      this.emit('end')
    }))
    .pipe(autoPrefixer({
      browsers: ['last 2 versions', 'ie > 10']
    }))
    .pipe(sourceMaps.write(src.css))
    .pipe(gulp.dest(src.css))
    .pipe(browserSync.stream())
    .pipe(notify({message: 'Scss compiled', onLast: true}))
})

// gulp.task('browser-sync', ['uglify', 'sass'], function () {
gulp.task('browser-sync', ['sass'], function () {
  browserSync.init({
    server: '../',
    directory: true,
    reloadDebounce: 1000,
    open: false,
    notify: false,
    files: [
      '../index.html'
    ]
  })

  // gulp.watch('../js/*.js', ['uglify'])
  gulp.watch('../scss/**/*.scss', ['sass'])
})

gulp.task('default', ['browser-sync'])
