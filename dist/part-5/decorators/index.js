"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Entity(classInfo) {
    return function (target) {
        target.className = classInfo.name;
    };
}
exports.Entity = Entity;
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
exports.enumerable = enumerable;
function readonly(target, propertyKey, descriptor) {
    descriptor.writable = false;
}
exports.readonly = readonly;
