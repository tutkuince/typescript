function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(3, 5));
// anonymous
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(5, 5));
function divide(num1, num2) {
    return num1 / num2;
}
console.log(divide(3, 2));
// Default Parameter
function extract(num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return num1 - num2;
}
console.log(extract(1)); // num2 is 2
// Optional
function mode(num1, num2) {
    if (num2) {
        return num1 % num2;
    }
    return num1;
}
console.log(mode(3));
// Rest Params
function invite() {
    var guests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        guests[_i] = arguments[_i];
    }
    return guests.join(' ');
}
console.log(invite("Tutku", "Emin", "Ugur"));
