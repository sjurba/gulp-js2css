# gulp-js2css [![Build Status](https://travis-ci.org/sjurba/gulp-js2css.svg?branch=master)](https://travis-ci.org/sjurba/gulp-js2css)

> My bedazzling gulp plugin


## Install

```
$ npm install --save-dev gulp-js2css
```


## Usage

```js
var gulp = require('gulp');
var js2css = require('gulp-js2css');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(js2css())
		.pipe(gulp.dest('dist'));
});
```


## API

### js2css(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Sjur Bakka](http://sjurba.github.io)
