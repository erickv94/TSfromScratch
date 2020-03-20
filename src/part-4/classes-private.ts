export {};

class Idea{


    constructor(private id:number,private name:string){
    }

}

class Customer{
    private name: string;
    private ideas: Idea[]=[];

    constructor(name:string){
        this.name=name;
    }

    addIdeas(idea:Idea){
        this.ideas.push(idea);
    }


}

const jonhDoe= new Customer('Jonh Doe');
jonhDoe.addIdeas(new Idea(1,'Improve enviroment'));
jonhDoe.addIdeas(new Idea(2,'Bycicle zone'));
// jonhDoe.name='Change name'; //name can't be edited
console.log(jonhDoe);
// console.log(jonhDoe.name); //name can't be showed