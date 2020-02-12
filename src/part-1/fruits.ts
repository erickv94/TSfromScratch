let fruits=["Apple","Avocado","Melon"]
console.log("fruits are",fruits);
console.log("filter fruits",fruits.filter((fruit)=>fruit!="Avocado"))
//error detected but compiled anyway
// fruits= 10;
// console.log("error fruit",fruits);

function sum(a: number,b: number){
    return a+b;
}

const resultado= sum(10,10)
console.log(resultado);