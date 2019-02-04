const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const ts = require("gulp-typescript");
// 걸프 의존성 작성

gulp.task('default', function (cb) {
  // 걸프가 실행할 작업을 여기 쓴다

  // eslint를 실행
  // gulp.src(['es6/**/*.js', 'public/es6/**/*.js'])
  //   .pipe(eslint())
  //   .pipe(eslint.format());

  // 노드(서버) 소스
  // gulp.src('src/**/*.ts')
  //   .pipe(babel())
  //   .pipe(gulp.dest('dist'));

    console.log('^_ㅠ,,')

  gulp
    .src("src/**/*.ts")
    .pipe(
      ts({
        noImplicitAny: true,
        experimentalDecorators: true
      })
    )
    .pipe(gulp.dest("dist"));

  // // 브라우저(프론트) 소스
  // gulp.src('public/es6/**/*.js')
  //   .pipe(babel())
  //   .pipe(gulp.dest('public/dist'));

  return cb();
});
