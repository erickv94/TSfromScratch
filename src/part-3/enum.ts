export {};

enum ABC{
    a,
    b=20,
    c
}

console.log("ABC.a",ABC.a); //0
console.log("ABC[0]",ABC[0]);  //a
console.log("ABC.b",ABC['b']); //20

enum Days{
    Lunes="lun",
    Martes="Mar",
    Miercoles="Mier",
    Jueves="Jue",
    Viernes="Vie"
}



console.log(Days);