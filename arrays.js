// // Ex 2-4
// var numbers = [1,2,3];
// var cars = new Array ("Saab", "Volvo", "BMW");
// var planes = Array  ("Boeing", "Concorde", "Airbus");
// var str = "1,2,3"
// // console.log(str.split(","));
// // console.log(cars.toString());
// // console.log(planes.valueOf());

// // cars.length = 7;

// // console.log(cars.toString());
// // console.log(cars.valueOf());

// // cars.length = 2;

// // console.log(cars.toString());

// // cars[2] = "Lexus";

// // console.log(cars.toString());

// // cars[10] = "Honda";

// // console.log(cars.toString());

// // Ex 5

// var moto = [];

// moto.push ("Yamaha");

// console.log(moto.toString());

// moto.push("Honda", "Tripumph")

// console.log(moto.toString());

// moto.pop();

// console.log(moto);

// moto.shift();

// console.log(moto.toString());

// moto.unshift("Suzuki","Ducati");

// console.log(moto.toString());

// // Ex 6

// var total = numbers.concat(moto,cars,planes);

// console.log(total.toString());

// // Ex 7

// function checkLength(arr) {
//     if (arr.length >= 6) {
//         console.log('Array has a bigger tength than 6.');
//     } else {
//         for (let index = arr.length; index <= 5; index++){
//             arr.push(arr.length);
//             console.log(arr.toString());        
//         }
//     }
// }

// checkLength(total);
// checkLength(moto);

// // Ex 8

// console.log(moto.length);

// moto.splice(3,0,9,10,9);

// console.log(moto);

// // Ex 9

// moto.sort();

// console.log(moto.toString());

// moto.sort(
//     function (left,right) {
//         if (left < right) {
//             return -1;
//         } else if (left > right) {
//             return 1;
//         } 
//         return 0;
//     }
// );

// console.log(moto.toString());

var arra = [1,2,3];

arra.push('a b c');

console.log(arra.length);


