export {};

function Entity(classInfo: any){
    return function(target: any){
        target.className=classInfo.name
    }
}

function enumerable(value: boolean){
    return function (target: any,propertyKey: PropertyKey,descriptor: PropertyDescriptor){
        descriptor.enumerable=value;
    }
}

function readonly(target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor){
         descriptor.writable=false;
}

@Entity({name: 'Course_Class'})
class Course{
    _param: string;
    constructor(private _id: number,private _name: string){
        this._param='A single param';
    }

    @enumerable(false)
    getParam(){
        return this._param;
    }

    @readonly
    sayHello(){
        console.log("Hello from not writable method");
    }
    get id(){
        return this._id;
    }

    set id(id: number){
        this._id=id;
    }

    get name(){
        return this._name;
    }

    set name(name:string){
        this._name=name;
    }


}

@Entity({name:"Pocket_name"})
class Pocket{

}

function checkClass(_class: any){
    console.log('class_info', _class.className);
}  

function checkFns(_class: any){
    for(let prop in _class.prototype){
        console.log('props',prop);
    }
}

let ts= new Course(1,'TS from scratch')

checkClass(Course)
checkFns(Course)

// ts.sayHello=function (){}; //show an error beacause decorator disable writable descriptor
ts.sayHello()
ts.getParam()