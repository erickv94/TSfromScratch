//boolean
let isConnected=true;
let isAPerson: boolean;

isAPerson=false;
console.log(isConnected,isAPerson);

function hasDiscount(curse: string): boolean{
    if(curse==="typescript")
        return true;
    return false;
}

console.log(hasDiscount("PHP"));
console.log(hasDiscount("typescript"));

//numbers

let students = 100;
// students='200'; //non-valid
let quantity: number;
quantity=1000;

console.log(students,quantity);

function getDiscount(curse: string): number{
    if(curse==="Typescript")
        return 24.99;
    return 0;
}

console.log("discount", getDiscount("Typescript"));

let hexa: number = 0xf00d;
console.log("hexa", hexa);
let bin: number = 0b1001;
console.log("bin",bin);
let oct: number = 0o755;
console.log("octal", oct);

//string
let FirstName ="Juan";
let lastName: string = "Doe"
let fullName=`${FirstName} ${lastName}`

console.log(fullName);

let arr =["Typescript","Angular"];

let message=`
${fullName} i got ${arr.length} courses.
thanks for sharing
`;

console.log(message);

