"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkClass(_class) {
    console.log('class_info', _class.className);
}
exports.checkClass = checkClass;
function checkFns(_class) {
    for (var prop in _class.prototype) {
        console.log('props', prop);
    }
}
exports.checkFns = checkFns;
