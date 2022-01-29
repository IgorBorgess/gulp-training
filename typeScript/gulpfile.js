const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
// const GulpUglify = require('gulp-uglify')
// const concat = require('gulp-concat')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        // .pipe(GulpUglify())
        // .pipe(concat('javascript.min.js'))
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)