"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Idea.prototype, "name", {
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
var SpecialCustomer = /** @class */ (function (_super) {
    __extends(SpecialCustomer, _super);
    function SpecialCustomer(name, discount) {
        var _this = _super.call(this, name) || this;
        _this._discount = discount;
        return _this;
    }
    Object.defineProperty(SpecialCustomer.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        set: function (discount) {
            this._discount = discount;
        },
        enumerable: true,
        configurable: true
    });
    return SpecialCustomer;
}(Customer));
var customer = new Customer('Jonh Doe');
customer.addIdeas(new Idea(1, "Learn How to Learn"));
customer.addIdeas(new Idea(2, "Learn How to Sleep"));
var customerWithDiscount = new SpecialCustomer("Johana Doe", 20);
console.log(customer);
console.log(customerWithDiscount);
