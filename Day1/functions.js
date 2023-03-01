"use strict";
//type declarations for function
exports.__esModule = true;
exports.getName = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
// default parameter for function
function addStrings(str1, str2) {
    if (str2 === void 0) { str2 = ''; }
    return "".concat(str1, " second name is ").concat(str2);
}
exports.addStrings = addStrings;
var format = function (str1, str2) { return "".concat(str1, " is ").concat(str2); };
exports.format = format;
var printFormat = function (title, param) { return console.log(format(title, param)); };
exports.printFormat = printFormat;
// type function that return a promise 
var fetchData = function (url) { return Promise.resolve("".concat(url)); };
exports.fetchData = fetchData;
//checking type at runtime 
var getName = function (user) { var _a, _b; return "".concat((_a = user === null || user === void 0 ? void 0 : user.firstName) !== null && _a !== void 0 ? _a : 'first', " last name is ").concat((_b = user === null || user === void 0 ? void 0 : user.lastName) !== null && _b !== void 0 ? _b : 'last'); };
exports.getName = getName;
exports["default"] = addNumbers;
