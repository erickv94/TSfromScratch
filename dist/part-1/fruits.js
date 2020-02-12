"use strict";
var fruits = ["Apple", "Avocado", "Melon"];
console.log("fruits are", fruits);
console.log("filter fruits", fruits.filter(function (fruit) { return fruit != "Avocado"; }));
//error detected but compiled anyway
// fruits= 10;
// console.log("error fruit",fruits);
function sum(a, b) {
    return a + b;
}
var resultado = sum(10, 10);
console.log(resultado);
