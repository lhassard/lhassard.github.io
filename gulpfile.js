var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
// what is required 2 variables needed
//gulp runs tasks - setting up browser-sync



// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/master.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});
 
// Static server
//gulp runs tasks - setting up browser-sync


//the sass will run first
gulp.task('browser-sync', gulp.series("sass",function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("scss/*.scss",gulp.parallel("sass"));
    gulp.watch("**/*.html").on('change', browserSync.reload);
    
    
}));
gulp.task('default', gulp.parallel('browser-sync'));
