export {};

let isNumber:any;
isNumber=false;
isNumber=20;


let num: number;
num=<number>isNumber;

console.log(num);


type Empty= {a:number,b:number} 
let empty:Empty=<Empty>{}
empty.a=2;
empty.b=3;

let ended: Empty=<Empty>{}
ended.a=200;
ended.b=20000;

console.log(empty);
console.log(ended);

let fromApi: Empty;
fromApi= <Empty> JSON.parse('{"a":23,"b":23}')
console.log(fromApi);

