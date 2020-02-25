export {};
let course: string ="Typescript";

let newCourse: string | number;

newCourse=23;
newCourse="Javascript"

function getCourse(): string | number{
    return 1
}

let courses: string[]=["Javascript","Typescript"];
let courses2: (string | number)[]=["JS",2,"R"]

console.log(courses,courses2);