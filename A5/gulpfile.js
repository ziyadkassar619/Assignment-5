var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));

function css() {
    return src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

exports.default = function() {
    watch('src/*.scss', css);
}