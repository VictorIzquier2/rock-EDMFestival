const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

function css(done){
  
  src("src/scss/**/*.scss") // identificar el archivo de SASS
    .pipe( plumber() ) // Evita que se detenga el work-flow
    .pipe( sass() ) // Compilar el archivo de SASS
    .pipe( dest("build/css") ) // Almacenar en el disco duro

  done(); // Callback que avisa a gulp cuando llegamos al final
}

function dev(done){
  watch("src/scss/**/*.scss", css);
  done();
}

exports.css = css;
exports.dev = dev;