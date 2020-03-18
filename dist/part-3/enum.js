"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ABC;
(function (ABC) {
    ABC[ABC["a"] = 0] = "a";
    ABC[ABC["b"] = 20] = "b";
    ABC[ABC["c"] = 21] = "c";
})(ABC || (ABC = {}));
console.log("ABC.a", ABC.a); //0
console.log("ABC[0]", ABC[0]); //a
console.log("ABC.b", ABC['b']); //20
var Days;
(function (Days) {
    Days["Lunes"] = "lun";
    Days["Martes"] = "Mar";
    Days["Miercoles"] = "Mier";
    Days["Jueves"] = "Jue";
    Days["Viernes"] = "Vie";
})(Days || (Days = {}));
console.log(Days);
