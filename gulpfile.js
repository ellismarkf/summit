var gulp        = require('gulp'),
	browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	browserSync.init({
		server: __dirname
	});
	gulp.watch('index.html').on('change', browserSync.reload);
	gulp.watch('css/index.css').on('change', browserSync.reload);
	gulp.watch('js/index.js').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);