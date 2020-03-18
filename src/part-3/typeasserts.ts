export {};

type Course= string|number;
let course: string ="Typescript";
let newCourse: Course ;

newCourse=23;
newCourse="Javascript"

function getCourse(): Course{
    return 1
}

let courses: string[]=["Javascript","Typescript"];
let courses2: (Course)[]=["JS",2,"R"]

console.log(courses,courses2);