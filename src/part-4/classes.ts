export {};

class Idea{
    id: number;
    name: string;

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }

}

class Customer{
    name: string;
    ideas: Idea[]=[];

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

console.log(jonhDoe);