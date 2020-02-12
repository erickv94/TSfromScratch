"use strict";
// any
var unknown;
unknown = 'string';
unknown = 200;
var notKnown;
notKnown = true;
notKnown = 200;
console.log(unknown, notKnown);
// void
var empty;
function showContent(course) {
    var message = course ? "Welcome to " + course : "subscribe";
    console.log(message);
}
console.log("fn void", showContent('Typescript'));
showContent('Typescript');
// never
var never;
function returnError(error) {
    throw new Error("Error typescript." + error);
}
// returnError('not valid excp')
function infiniteStuff() {
    while (true) {
        console.log("ts run");
    }
}
// infiniteStuff()
