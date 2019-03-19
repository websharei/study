const gulp = require('gulp');
//걸프 의존성
const babel = require('gulp-babel');

gulp.task('default', function(done) {
	//걸프 작업
	//노드 소스
	gulp.src("es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));

	//브라우저 소스
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
	done();
});
