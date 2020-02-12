// any
let unknown;
unknown='string'
unknown=200;

let notKnown: any;
notKnown=true;
notKnown=200;

console.log(unknown,notKnown);

// void
let empty: void;

function showContent(course: string): void{
    const message=course? `Welcome to ${course}`:`subscribe`;

    console.log(message);
}

console.log("fn void",showContent('Typescript'));
showContent('Typescript')

// never

let never: never;

function returnError(error: string): never{
    throw new Error("Error typescript."+error)
}


// returnError('not valid excp')

function infiniteStuff(): never {
    while(true){
        console.log("ts run");
    }
}

// infiniteStuff()