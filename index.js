'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var js2css = require('js2css');

function requireFromString(src, filename) {
    var Module = module.constructor;
    var m = new Module();
    m._compile(src, filename);
    return m.exports;
}


module.exports = function(options) {
    // if (!options.foo) {
    //     throw new gutil.PluginError('gulp-js2css', '`foo` required');
    // }

    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-js2css', 'Streaming not supported'));
            return;
        }

        try {
            var styles = requireFromString(file.contents.toString());
            file.contents = new Buffer(js2css(styles), options);
            file.path = file.path.replace(/css.js$/, 'css');
            this.push(file);
        } catch (err) {
            this.emit('error', new gutil.PluginError('gulp-js2css', err));
        }

        cb();
    });
};