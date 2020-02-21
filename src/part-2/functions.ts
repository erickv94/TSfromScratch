//optional value on param is like lastname?: string
function greeting(name: string, lastName?: string): string{
    if(lastName)
        return `Hello ${name} ${lastName}`
    return `Hello ${name}`
}

console.log(greeting("Docker"));
console.log(greeting("Erick","Ventura"));

//arrays 
let courses: any[ ]=['Angular','React','Vue'];
courses = [...courses,1,3];
console.log(courses);

let strings: string[]=["Lorem",'ipsum','xd'];
// string=[1,2];  
strings=[...strings, 'Docker','Jenkins'];

console.log(strings);


//generics arrays
let names: Array<string>;
names=['A',"b",'c','d'];

console.log(names);


//tuples
let infoCourses: [string, number]=["Angular",20.99];
console.log(infoCourses);

let infoCard: [string, number] =["Typescript", 19.99]


infoCourses=infoCard;
console.log(infoCourses);