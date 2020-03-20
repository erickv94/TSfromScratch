export {};

enum SomeIdeas{
    Parking,
    CoffeFree
}


class Idea{

    public static myIdeas: SomeIdeas[]=[SomeIdeas.CoffeFree,SomeIdeas.Parking];
    constructor(private _id:number,private _name:string){
    }

    get id(){
        return this._id;
    }

    set id(id:number){
        this._id=id;
    }

    static getInfo(c: Idea){
        return JSON.stringify(c);
    }

    get name(){
        return this._name;
    }

    set name(name:string){
        this._name=name;
    }

}

abstract class Customer{
    protected _name: string;
    protected ideas: Idea[]=[];

    constructor(name:string){
        this._name=name;
    }

    get name(){
        return this._name;
    }

    set name(name:string){
        this._name=name;
    }

    addIdeas(idea:Idea){
        this.ideas.push(idea);
    }


}

class SpecialCustomer extends Customer{
    private _discount: number;
    constructor(name:string,discount:number){
        super(name);
        this._discount=discount;
    }
      
    get discount(){
        return this._discount;
    }
    
    set discount(discount:number){
        this._discount=discount;
    }
}




// calling static attribute

console.log(Idea.myIdeas);
console.log(Idea.getInfo(new Idea(2,"Discounts on saturdays")));