var pathToRegexp = require('path-to-regexp');

var pathModel = '/tours/:tType-:name-:id/:filter([a-zA-Z]\\w+\\d)?';
var path = '/tours/d-malaysia-100022/grouptravel';
var keys = [];
console.log(pathToRegexp(pathModel, keys).exec(path));

// 'b123p3d5'.match(splitReg);
var splitReg = /((([a-zA-Z]+)(\d*))|(([a-zA-Z]*)(\d+)))/g
var str = 'b123p3d5';
var res;
while (res = splitReg.exec(str)) {
    console.log(res);
}