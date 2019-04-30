function greeter(name) {
    return "Hi " + name;
}
var message = greeter("Jack");
console.log(message);
var num;
// num = 10;
num = 10.5;
console.log("Number: " + num);
var city;
city = "Izmir";
// city = 10; cannot use city like number
var isTrue;
isTrue = true; // true or false
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
console.log(numbers);
console.log(numbers2);
var arrays = [2, "Istanbul"];
console.log(arrays[0]); // 2
console.log(arrays[1]); // Istanbul
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Black"] = 2] = "Black";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
console.log(Colors[1]);
