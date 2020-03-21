import  {Entity, readonly, enumerable} from '../decorators/index';

@Entity({name: 'Course_Class'})
export default class Course{
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