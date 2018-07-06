const gulp = require('gulp')
const cleancss = require('gulp-clean-css')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')
const less = require('gulp-less')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

gulp.task('default', ['cssmin', 'jsmin', 'imagemin', 'htmlmin', 'less'], function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  // 监听文件变化 文件变化后执行后面的任务
  gulp.watch(['src/*.html', 'src/css/*.css', 'src/js/*.js', 'src/views/**/*.js'], ['htmlmin', 'cssmin', 'jsmin'])
})

gulp.task('cssmin', function () {
  gulp.src('src/css/*.css')
    .pipe(cleancss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({ stream: true }))
})

gulp.task('jsmin', () => {
  gulp.src(['src/js/*.js', 'src/views/**/*.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({ stream: true }))
})

gulp.task('imagemin', () => {
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .pipe(reload({ stream: true }))
})

gulp.task('htmlmin', () => {
  gulp.src(['src/*.html'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
    .pipe(reload({ stream: true }))
  gulp.src(['src/views/**/*.html'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/views'))
    .pipe(reload({ stream: true }))
})

gulp.task('less', () => {
  gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(cleancss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/less'))
    .pipe(reload({ stream: true }))
})
