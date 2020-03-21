"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Entity(classInfo) {
    return function (target) {
        target.className = classInfo.name;
    };
}
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
function readonly(target, propertyKey, descriptor) {
    descriptor.writable = false;
}
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
        enumerable(false)
    ], Course.prototype, "getParam", null);
    __decorate([
        readonly
    ], Course.prototype, "sayHello", null);
    Course = __decorate([
        Entity({ name: 'Course_Class' })
    ], Course);
    return Course;
}());
var Pocket = /** @class */ (function () {
    function Pocket() {
    }
    Pocket = __decorate([
        Entity({ name: "Pocket_name" })
    ], Pocket);
    return Pocket;
}());
function checkClass(_class) {
    console.log('class_info', _class.className);
}
function checkFns(_class) {
    for (var prop in _class.prototype) {
        console.log('props', prop);
    }
}
var ts = new Course(1, 'TS from scratch');
checkClass(Course);
checkFns(Course);
// ts.sayHello=function (){}; //show an error beacause decorator disable writable descriptor
ts.sayHello();
ts.getParam();
