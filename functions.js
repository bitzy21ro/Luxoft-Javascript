// // // with return

// // function func1(param1){
// //     return param1 * 1000
// // }

// // function func1(param1){
// //     console.log('func2');
// // }

// // //recursive

// // function factorial(x) {
// //     if (x <=1 ) return 1
// //     return x * factorial(x-1)   
// // }

// // // function parameters

// // var primitive = 3

// // var obj = {
// //     someProp: 5
// // }

// // function duplicate(param) {
// //     param = param + param
// // }

// // function duplicateObj(param) {
// //     param.someProp = param.someProp + param.someProp
// // }

// // duplicate(primitive);
// // console.log(primitive);

// // duplicateObj(obj);
// // console.log(obj.someProp);

// // // Arguments

// // function myFunc(param1,param2) {
// //     console.log(arguments.length);
// //     console.log(arguments[0]);
// //     console.log(param2);
// // }

// // myFunc(1);

// // Constructor functions - instance props/methods

// // var Car = function (brand) {
// //     this.brand = brand;
// //     this.start = function () {
// //         console.log("Start "+ this.brand);
// //     }
// // }

// // var myCar = new Car ("Mazda")
// // var oldCar = new Car ("Seat")

// // console.log(typeof myCar);
// // console.log(myCar.brand);

// // myCar.start();
// // oldCar.start();

// // console.log(myCar.start === oldCar.start);

// // Constructor Functions - Class props/methods

// // var Car = function (brand) {
// //     this._privateField = 'is not really private';
// //     this.brand = brand;
// //     Car.counter ++;
// //     this.start = function () {
// //         console.log("Start " + this.brand);

// //     }
// // }

// // Car.counter=0;

// // var myCar = new Car ("Mazda");
// // var myCar = new Car ("Mazd  ");
// // var myCar = new Car ("Maa");
// // var myCar = new Car ("Mzda");
// // var myCar = new Car ("Mda");


// // Car.SOME_CONST = 5;
// // Car.staticMethod = function () {
// //     console.log('I\'m static!');
// // }

// // console.log(Car.SOME_CONST);
// // Car.staticMethod();
// // console.log(myCar.brand);
// // myCar.start();
// // console.log(Car.counter);

// // THIS

// // console.log(this);

// // var myObj = {
// //     myFUnc: function () {
// //         console.log(this);

// //     }
// // }

// // myObj.myFUnc()

// // var MyConstructorFunction = function(){
// //     console.log(this);

// // }

// // var myObj3 = new MyConstructorFunction()

// // // call
// // var myFunction = function () {
// //     console.log(this);

// // }

// // myFunction.call({ prop: 3 })

// // //apply

// // var myFnWithParams = function (param1,param2) {
// //     console.log(this,param1);
// //     return 3

// // }

// // console.log(myFnWithParams.apply({prop2: "x"}, ["firstParam"]));

// // // Bind

// // var newFN = myFnWithParams.bind({}, 'args1', 'arg2')

// function func1() {
//     console.log("Aceasta este functia");
// }

// func1();

// function fouter() {
//     function finner() {
//         console.log("finner");
//     }
//     finner();
// }

// fouter();

// // Ex 3

// function ex3(param) {
//     var x = param;
// }

// var myVar = 4;

// ex3(myVar);
// console.log(myVar);

// // Ex 4

// var myObj = {};
// console.log(myObj);

// function addparam(param) {
//     param.newProp = 3
// }

// addparam(myObj);
// console.log(myObj);

// // Ex5

// function ex5(x, y) {
//     console.log(arguments);
//     console.log(arguments[2]);
//     console.log(arguments[3]);
//     return x + y;

// }

// console.log(ex5("x", "y", "z", "w"));

// // Ex 6

// var Person = function(first, last, age, birthdate, marriageDate) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.birthdate = birthdate;
//     this.marriageDate = marriageDate;
//     Person.counter++;
//     this.degree = 0;
//     this.degree++;
//     // this.getBirthDateRomanian = function (){
//     //     this.birthdate.toLocaleDateString('de-DE',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
//     // } 
//     // this.getMarriageDateRomanian = function (){
//     //     this.marriageDate.toLocaleDateString('de-DE',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
//     // } 
//     }

// Person.getRomanianDate = function (date) {
//     return date.toLocaleDateString('de-DE',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
// }

// Person.counter = 0;

// var myFather = new Person('Marcel', 'Tudorache', 65, new Date(0),new Date(0));
// myFather.nationality = 'Romanian';

// myFather.name = function () {
//     return this.firstName + ' ' + this.lastName;
// }

// console.log(myFather);
// console.log(myFather.name());
// console.log(Person.counter);
// console.log(Person.getRomanianDate(myFather.birthdate));
// console.log(Person.getRomanianDate(myFather.marriageDate));

// Person.DECADE = '20th century';
// Person.neme = function () {
//     return this.firstName + ' ' + this.lastName;
// }

// // Ex8

// // Array() - apeleaza functia array
// // new Array() - creeaza un Obiect si apeleaza constructorul lui.

// // Ex 10

// function Laptop(hdd,display,processor,video_card, ram) {
//     this.hdd = hdd;
//     this.display = display;
//     this.processor = processor;
//     this.video_card = video_card;
//     this.ram = ram;
// }

// console.log(Laptop());

// console.log(new Laptop());

// Ex 11

// function any() {
//     console.log(this);
// }

// any();

// any.call({xy:'123'});

// any.apply({nume:'Alex'});

// function ex11(param) {
//     console.log(this);
//     console.log(param);
// }

// ex11('Alex');

// ex11.apply({nume: 'Tudorache'});

// function ex113() {
//     console.log(this);
// }

// var bound = ex113.bind(this);
// console.log(bound);

// Ex 12

function name(param) {
    var param = 123;
    function inception() {
        console.log(param);
    }
    return inception;
}

var myNewFunc = name();
myNewFunc;


// EX 13

var myObj = (function() {
    var privateVariable = 12;
    return {
        get priv() {
            return privateVariable;
        },
        set priv(param) {
            privateVariable = param;
        }
    }
})();

console.log(myObj);
console.log(myObj.priv);
myObj.priv = 3;
console.log(myObj.priv);

// Ex 14