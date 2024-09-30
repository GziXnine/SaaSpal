const gulp = require("gulp");
const connect = require("gulp-connect");

// ! Make a Live Server Connection
gulp.task("connect", function () {
  connect.server({
    root: "./dist/",
    livereload: true,
    port: 8000,
  });
  console.log("Live Server Is Running at http://localhost:8000");
});

gulp.task("default", gulp.series("connect"));
