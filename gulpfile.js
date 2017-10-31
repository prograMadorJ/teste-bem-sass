var gulp = require('gulp');

var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

var cssnano = require('gulp-cssnano');


/** Sicronizador com o Browser */
gulp.task('browserSync',function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});

/** Tarefa de processamento de sass */
gulp.task('sass',function(){
    return gulp.src('assets/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


/** Desenvolvimento just-in-time */

gulp.task('watch',['browserSync','sass'],function(){
    gulp.watch('assets/**/*.scss',['sass'])
    gulp.watch('./*.html',browserSync.reload)
    gulp.watch('assets/css/**/*.css',browserSync.reload)
});

