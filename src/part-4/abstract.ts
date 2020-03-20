export {};


class Idea{


    constructor(private _id:number,private _name:string){
    }

    get id(){
        return this._id;
    }

    set id(id:number){
        this._id=id;
    }

    get name(){
        return this._name;
    }

    set name(name:string){
        this._name=name;
    }

}

class Customer{
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



const customer=new Customer('Jonh Doe');
customer.addIdeas(new Idea(1,"Learn How to Learn"));
customer.addIdeas(new Idea(2,"Learn How to Sleep"));
const customerWithDiscount = new SpecialCustomer("Johana Doe",20);

 console.log(customer);
 console.log(customerWithDiscount);