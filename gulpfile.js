                                                                                             
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var replace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('compila', function() {
        return gulp.src('./src/teste.scss') // acessa a pasta src e pega o arquivo teste.scss
            
                .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
                .pipe(autoprefixer())
                .pipe(concat('style.css.liquid')) // salva o arquivo novo compilado como style.css.liquid
                .pipe(replace('"{{', '{{'))
                .pipe(replace('}}"', '}}'))               
                .pipe(gulp.dest('./src/')); // salva o arquivo novo em src
});
