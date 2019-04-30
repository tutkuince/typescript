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
var Home = /** @class */ (function () {
    function Home(numberOfRooms, numberOfBathroom, address) {
        this.numberOfRooms = numberOfRooms;
        this.numberOfBathroom = numberOfBathroom;
        this.address = address;
    }
    Home.prototype.toString = function () {
        console.log("Number of rooms: " + this.numberOfRooms + ", Bathroom: " + this.numberOfBathroom + ", Address: " + this.address);
    };
    return Home;
}());
var home = new Home(3, 2, "Izmir");
home.toString();
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.save = function () {
        console.log("Saved!");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sell = function () {
        console.log("Product sold!");
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.paySalary = function () {
        console.log("Salary paid");
    };
    return Employee;
}(Person));
var customer = new Customer();
customer.name = "Jack";
console.log(customer.name);
customer.save();
customer.sell();
var employee = new Employee();
employee.save();
employee.paySalary();
