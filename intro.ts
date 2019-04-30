function greeter(name:string) {
    return "Hi " + name;
}

let message = greeter("Jack");
console.log(message);

let num:number;
// num = 10;
num = 10.5;
console.log("Number: " + num);

let city:string;
city = "Izmir";
// city = 10; cannot use city like number

let isTrue:boolean;
isTrue = true;  // true or false

let numbers:number[] = [1, 2, 3];
let numbers2:Array<number> = [1, 2, 3];
console.log(numbers);
console.log(numbers2);

let arrays:[number, string] = [2, "Istanbul"];  //Tuple
console.log(arrays[0]); // 2
console.log(arrays[1]); // Istanbul

enum Colors {
    Red = 1,
    Black,
    Blue
}

console.log(Colors[1]); // Red
console.log(Colors.Black);  // Black


// Not sure : any
let value:any;
// value = "Miami";
// value = 2;
value = {};

// void
function sayHi():void {
    console.log("Hello!!!");
}
console.log(sayHi());

// undefined
let age:number; // age is undefined now
age = 10;   // age is not undefined

// null
