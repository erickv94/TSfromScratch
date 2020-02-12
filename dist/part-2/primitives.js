"use strict";
//boolean
var isConnected = true;
var isAPerson;
isAPerson = false;
console.log(isConnected, isAPerson);
function hasDiscount(curse) {
    if (curse === "typescript")
        return true;
    return false;
}
console.log(hasDiscount("PHP"));
console.log(hasDiscount("typescript"));
//numbers
var students = 100;
// students='200'; //non-valid
var quantity;
quantity = 1000;
console.log(students, quantity);
function getDiscount(curse) {
    if (curse === "Typescript")
        return 24.99;
    return 0;
}
console.log("discount", getDiscount("Typescript"));
var hexa = 0xf00d;
console.log("hexa", hexa);
var bin = 9;
console.log("bin", bin);
var oct = 493;
console.log("octal", oct);
//string
var FirstName = "Juan";
var lastName = "Doe";
var fullName = FirstName + " " + lastName;
console.log(fullName);
var arr = ["Typescript", "Angular"];
var message = "\n" + fullName + " i got " + arr.length + " courses.\nthanks for sharing\n";
console.log(message);
