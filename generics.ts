function valueWithNumber(num: number): number {
    return num;
}

function valueWithString(city: string): string {
    return city;
}

let num = valueWithNumber(10);
console.log(num);

let city = valueWithString("Izmir");
console.log(city);


// Generic Methods
function valueWithGeneric<T>(value: T): T {
    return value;
}

let num1 = valueWithGeneric<number>(10);
console.log(num1);

let city1 = valueWithGeneric<string>("Izmir");
console.log(city1);



// Generic Classes
class GenericClass<T> {
    variable: T;

    function(parameter: T): T {
        return parameter;
    }
}

let student = new GenericClass<string>();
console.log(student.variable = "Hi!");
console.log(student.function("Hello!"));