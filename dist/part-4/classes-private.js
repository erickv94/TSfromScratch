"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Idea = /** @class */ (function () {
    function Idea(id, name) {
        this.id = id;
        this.name = name;
    }
    return Idea;
}());
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.ideas = [];
        this.name = name;
    }
    Customer.prototype.addIdeas = function (idea) {
        this.ideas.push(idea);
    };
    return Customer;
}());
var jonhDoe = new Customer('Jonh Doe');
jonhDoe.addIdeas(new Idea(1, 'Improve enviroment'));
jonhDoe.addIdeas(new Idea(2, 'Bycicle zone'));
// jonhDoe.name='Change name'; //name can't be edited
console.log(jonhDoe);
// console.log(jonhDoe.name); //name can't be showed
