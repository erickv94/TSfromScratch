"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//optional value on param is like lastname?: string
function greeting(name, lastName) {
    if (lastName)
        return "Hello " + name + " " + lastName;
    return "Hello " + name;
}
console.log(greeting("Docker"));
console.log(greeting("Erick", "Ventura"));
//arrays 
var courses = ['Angular', 'React', 'Vue'];
courses = __spreadArrays(courses, [1, 3]);
console.log(courses);
var strings = ["Lorem", 'ipsum', 'xd'];
// string=[1,2];  
strings = __spreadArrays(strings, ['Docker', 'Jenkins']);
console.log(strings);
//generics arrays
var names;
names = ['A', "b", 'c', 'd'];
console.log(names);
//tuples
var infoCourses = ["Angular", 20.99];
console.log(infoCourses);
var infoCard = ["Typescript", 19.99];
infoCourses = infoCard;
console.log(infoCourses);
