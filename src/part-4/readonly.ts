export {};

class Idea{


    constructor(private readonly _id:number,private _name:string){
    }

    get id(){
        return this._id;
    }

    // set id(id:number){
    //     this._id=id;
    // } //cause it's readonly

    get name(){
        return this._name;
    }

    set name(name:string){
        this._name=name;
    }

}

class Customer{
    private _name: string;
    private ideas: Idea[]=[];

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

const jonhDoe= new Customer('Jonh Doe');
const firstIdea=new Idea(1,'Improve enviroment');
firstIdea.name='Parking free'; //like use setName
// firstIdea.id=20; //cause it's readonly
jonhDoe.addIdeas(firstIdea); 
jonhDoe.addIdeas(new Idea(2,'Bycicle zone'));
jonhDoe.name='Change name'; //like use setName
console.log(jonhDoe);
console.log(jonhDoe.name); //like use getName