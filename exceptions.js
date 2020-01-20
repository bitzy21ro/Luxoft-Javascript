// function x() {
//     var y = function (y) {
//         if (y && y>0) {
//             throw new Error ('param must be positive');
//         }
//         console.log('y', y);
//         return y * 2;
//     }
//     try {
//         y();
//     } catch (e) {
//         console.log('Something bad: ' , e);
//     }
//     console.log('control goes here');

// }

// x();

// Ex 2

// try {
//     throw 3;
//     console.log('after 3');
// } catch (error) {
//     console.log('Not this one', error);
// }

// console.log("after the try catch");


// // Ex 3

// try {
//     throw new Error('Error message');
//     // } catch (e) {
//     // console.log('New Error', e);
//     // console.log('finally was created');
// } finally { 

// }

// Ex 4

// function x() {
//     try {
//         throw new Error('Error message');
//         // } catch (e) {
//         // console.log('New Error', e);
//         // console.log('finally was created');
//     } finally { 
//         console.log('Where did it go?');    
//     }
// }

// x();

// Ex 5

// try {
//     try {
//         throw new TypeError ('Inner Error')
//      } catch (e) {
//          console.log('Caught inner Error', e);
//          throw new Error('Outer error',e);
//      }
// } catch (error) {
//     console.log('Outer Error', error);      
// }

// Ex 6

// var cars;

// switch (cars) {
//     case "Mazda":
//         cars = "Mazda is the best"
//         break;
    
//     case "BMW":
//         cars = "Why did you pick a BMW?"
//         break;
//     default:
//         cars = "Any car is good as long as you like it."
//         break;
// }

// Ex 7

var MyException = function (error_code, error) {
    this.error_code = error_code;
    this.error = error;
}

MyException.UNKOWN = '0';
MyException.BAD_REQUEST = '400';
MyException.SERVER_ERROR = '500';

// throw new Error('Error Message: Unknown', MyException.UNKOWN);

// throw new Error('Error Message: Bad_Request', MyException.BAD_REQUEST);

throw new Error('Error Message: Server Error', MyException.SERVER_ERROR);
