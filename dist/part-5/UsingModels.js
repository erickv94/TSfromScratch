"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Course_1 = __importDefault(require("./model/Course"));
var index_1 = require("./util/index");
var tsCourse = new Course_1.default(20, 'Typescript from scratch');
index_1.checkClass(Course_1.default);
index_1.checkFns(Course_1.default);
