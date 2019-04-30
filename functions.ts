function sum(num1:number, num2:number):number {
    return num1 + num2;
}
console.log(sum(3, 5));

// anonymous
let multiply = function (num1:number, num2:number):number {
    return num1 * num2;
}
console.log(multiply(5, 5));

function divide(num1, num2) {   // it is like -> num1:any, num2:any
    return num1 / num2;
}
console.log(divide(3, 2));


// Default Parameter
function extract(num1:number, num2:number=2):number {
    return num1 - num2;
}
console.log(extract(1));    // num2 is 2


// Optional
function mode(num1:number, num2?:number):number {
    if (num2) {
        return num1 % num2;
    }
    return num1;
}
console.log(mode(3));


// Rest Params
function invite(...guests:string[]):string {
    return guests.join(' ');
}
console.log(invite("Tutku", "Emin", "Ugur"));