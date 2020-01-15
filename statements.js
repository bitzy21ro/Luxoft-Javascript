// // Ex 2;
// var person = {
//     age: 5
// };

// function validatePerson(person) {
//     if (!person) { return false; }
//     if (person.age < 0 || person.age > 100) return false;
//     return true;
// }

// if (validatePerson(person)) {
//     if (person.age < 3) {
//         console.log('baby');

//     } else if (person.age >= 3 && person.age < 12) {
//         console.log('child');

//     } else if (person.age >= 12 && person.age < 18) {
//         console.log('teen');

//     } else if (person.age >= 18 && person.age < 60) {
//         console.log('mature');
//     } else {
//         console.log('old');
//     };
// }

// // Ex 3

// var countryName = 'Romania';
// switch (countryName) {
//     default: console.log('unknown');
//         break;
//     case "Romania":
//         console.log('Bucharest');
//         break;
//     case "Bulgaria":
//         console.log("You are close enough, howver the country required is more to to the north");
//         break;
//     case "Ucraina":
//         console.log("Close enough however go south a bit");
//         break;
//     case "Ungaria":
//         console.log("More to the East please");
//         break;
// }

// // Ex 4

// var country = {
//     name: 'Romania',
// }

// function vaildateCountry(country) {
//     if (!country) { return false }
//     return true
// }

// if (vaildateCountry(country)) {
//     switch (country.name) {
//         default: console.log('unknown');
//             break;
//         case "Romania":
//             console.log('Bucharest');
//             break;
//         case "Bulgaria":
//             console.log("You are close enough, howver the country required is more to to the north");
//             break;
//         case "Ucraina":
//             console.log("Close enough however go south a bit");
//             break;
//         case "Ungaria":
//             console.log("More to the East please");
//             break;
//     }
// }

// // Ex 5;

// var i = 1;
// var sum = 0;

// while (i <= 2020) {
//     sum += i;
//     i++;
// } 
// console.log(sum);

// // Ex 6

// var sum2=0;
// var j = 1;

// do {
//     sum2 += j;
//     j++;
    
// } while (j <= 2020)

// console.log(sum2);

// // Ex 7

// var sum3 = 0;

// for (let index = 1; index <= 2020; index++) {
//     sum3 += index;
// }

// console.log(sum3);

// // Ex 8 

var cladire = {
    suprafata: 2000,
    etaje: 5,
    structura: "metal",
    usi: 30,
    lifturi: 4
}

for (let prop in cladire) {
    console.log(cladire[prop]);  
}

// Ex 9


// Ex 10

// var arr = [1,'true', true, 56, [1,2,5,6,7]];

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
//    }