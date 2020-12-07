// Load modules
const gulp = require('gulp')
const autoPrefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const Fiber = require('fibers')
const notify = require('gulp-notify')
const sass = require('gulp-dart-sass')
const sourceMaps = require('gulp-sourcemaps')

// variable paths
const path = {
  styles: {
    src: '../scss/styles.scss',
    dest: '../css',
    watch: '../scss/*.scss'
  }
}

// browserSync watch
function browsersync () {
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
}

// Scss : expanded or compressed
sass.compiler = require('sass')
function styles (done) {
  gulp.src(path.styles.src)
    .pipe(sourceMaps.init())
    .pipe(sass({
      fiber: Fiber,
      outputStyle: 'expanded'
    }).on('error', function (err) {
      console.log(err.toString())
      this.emit('end')
    }))
    .pipe(autoPrefixer({
      overrideBrowserslist: ['>0.2%', 'last 2 versions', 'Firefox ESR', 'not dead']
    }))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest(path.styles.dest))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'Sass compiled', onLast: true }))

  done()
}

function watchfiles () {
  gulp.watch(path.styles.watch, gulp.series(styles))
}

gulp.task('styles', styles)
gulp.task('default', gulp.parallel(styles))
gulp.task('watch', gulp.parallel(browsersync, watchfiles))
