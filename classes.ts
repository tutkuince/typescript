class Home {
    numberOfRooms: number;
    numberOfBathroom: number;
    address: string;


    constructor(numberOfRooms: number, numberOfBathroom: number, address: string) {
        this.numberOfRooms = numberOfRooms;
        this.numberOfBathroom = numberOfBathroom;
        this.address = address;
    }

    toString() {
        console.log("Number of rooms: " + this.numberOfRooms + ", Bathroom: " + this.numberOfBathroom + ", Address: " + this.address);
    }
}

let home = new Home(3, 2, "Izmir");
home.toString();


class Person {
    private _name:string;


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    save() {
        console.log("Saved!");
    }
}

class Customer extends Person {
    sell() {
        console.log("Product sold!");
    }
}

class Employee extends Person {
    paySalary() {
        console.log("Salary paid");
    }
}


let customer = new Customer();
customer.name = "Jack";
console.log(customer.name);
customer.save();
customer.sell();

let employee = new Employee();
employee.save();
employee.paySalary();
