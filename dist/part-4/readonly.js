"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Idea = /** @class */ (function () {
    function Idea(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    Object.defineProperty(Idea.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Idea.prototype, "name", {
        // set id(id:number){
        //     this._id=id;
        // } //cause it's readonly
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Idea;
}());
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.ideas = [];
        this._name = name;
    }
    Object.defineProperty(Customer.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.addIdeas = function (idea) {
        this.ideas.push(idea);
    };
    return Customer;
}());
var jonhDoe = new Customer('Jonh Doe');
var firstIdea = new Idea(1, 'Improve enviroment');
firstIdea.name = 'Parking free'; //like use setName
// firstIdea.id=20; //cause it's readonly
jonhDoe.addIdeas(firstIdea);
jonhDoe.addIdeas(new Idea(2, 'Bycicle zone'));
jonhDoe.name = 'Change name'; //like use setName
console.log(jonhDoe);
console.log(jonhDoe.name); //like use getName
