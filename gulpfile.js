import gulp from 'gulp';

// styles
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
const scss = gulpSass(sass);
import autoprefixer from 'gulp-autoprefixer';
import cssMinify from 'gulp-clean-css';

function styles() {
	return gulp
		.src('./src/styles/**/*.scss')
		.pipe(scss())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(cssMinify())
		.pipe(gulp.dest('./build/styles'));
}

// scripts
import jsMinify from 'gulp-terser';

function scripts() {
	return gulp
		.src('./src/scripts/**/*.js')
		.pipe(jsMinify())
		.pipe(gulp.dest('./build/scripts/'));
}

// watchTask
function watchTask() {
	gulp.watch(
		['./src/styles/**/*.scss', './src/scripts/**/*.js'],
		gulp.series(styles, scripts)
	);
}

export default gulp.series(styles, scripts, watchTask);
