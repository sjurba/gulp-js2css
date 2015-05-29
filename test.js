'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var js2css = require('./');

it('should process buffer', function(cb) {
	var stream = js2css();

	stream.on('data', function(file) {
		assert.strictEqual(file.contents.toString().replace(/\s*/g, ''), 'body{color:red;}');
		assert.strictEqual(file.path, __dirname + '/file.css');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		base: __dirname,
		path: __dirname + '/file.css.js',
		contents: new Buffer('module.exports = {body : {color: "red"}};')
	}));

	stream.end();
});