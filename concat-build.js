const concat = require('concat');
const es2015 = ['./dist/runtime.js', './dist/polyfills.js', './dist/main.js'];
concat(es2015, './dist/elements.js');
