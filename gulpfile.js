const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin =require('gulp-imagemin');
// const newer = require('gulp-newer');
 const uglify = require('gulp-uglify');

 function videos() {
        return gulp.src('./src/videos/**/*', { base: 'src/videos' })
        .pipe(gulp.dest('./dist/videos'));
}

 function script(){
     return gulp.src('./src/script/*.js')   //aponta para o arquivo que vai ser compilado 
     .pipe(uglify())// comprime o arquivo deixando ele mais compacto
     .pipe(gulp.dest('./dist/script')); //destino do arquivo final compilado 
 }

function styles(){
   return gulp.src('./src/styles/*.scss')   //aponta para o arquivo que vai ser compilado 
    .pipe(sass({outputStyle:'compressed'})) // comprime o arquivo deixando ele mais compacto
    .pipe(gulp.dest('./dist/css')); //destino do arquivo final compilado 
}

function images() {
    return gulp.src('./src/images/**/*', { base: 'src/images' })
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imagen'));
}



exports.default = gulp.parallel(styles,images,script,videos);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles))
    gulp.watch('./src/script/*.js',gulp.parallel(script))
    gulp.watch('./src/videos/**/*', gulp.parallel(videos));
}

