"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../decorators/index");
var Course = /** @class */ (function () {
    function Course(_id, _name) {
        this._id = _id;
        this._name = _name;
        this._param = 'A single param';
    }
    Course.prototype.getParam = function () {
        return this._param;
    };
    Course.prototype.sayHello = function () {
        console.log("Hello from not writable method");
    };
    Object.defineProperty(Course.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        index_1.enumerable(false)
    ], Course.prototype, "getParam", null);
    __decorate([
        index_1.readonly
    ], Course.prototype, "sayHello", null);
    Course = __decorate([
        index_1.Entity({ name: 'Course_Class' })
    ], Course);
    return Course;
}());
exports.default = Course;
