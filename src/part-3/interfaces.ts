export {};

interface IMovil{
    tires?: number; //as optional
    color: string;
    via:string;
}


let Byke: IMovil = {
    tires: 2,
    color: "Green",
    via: "Ground"
}

let ship: IMovil= {
    color: 'white',
    via: 'water'
}


interface ICar extends IMovil{
    seats: number;
    motor: string;
    mode: string;
}


const car: ICar={
    color:'Red',
    mode:'Auto',
    motor:'V9',
    seats: 4,
    via: 'ground'
}


console.log(Byke);
console.log(ship);
console.log(car);
