const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-scss')(require('scss'));
const concat = require('gulp-concat');
const replace = require('gulp-replace');

scss.compiler = require('node-scss');

gulp.task("scss",compilaScss);
function compilaScss() {
    return gulp
	.src('theme.scss.liquid')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest('dist'))
        .pipe(autoprefixer())
        .pipe(concat('style.css.liquid'))
        .pipe(replace('"{{', '{{'))
        .pipe(replace('}}"', '}}'))
        .pipe(gulp.dest(''))
};
