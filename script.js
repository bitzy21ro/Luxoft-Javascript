console.log("Hello World!");

console.log(new Date().toString());
console.log(Date.now());
// Ex 2
var numar = 5;
console.log(numar);
console.log(typeof numar);

var NotANumber = NaN;
console.log(NotANumber);
console.log(typeof NotANumber);

var infinit = Infinity;
console.log(infinit);
console.log(typeof infinit);

var bool = true;
console.log(bool);
console.log(typeof bool);

var nume = "Alex";
console.log(nume);
console.log(typeof nume);

var empt = "";
console.log(empt);
console.log(typeof empt);

var nul= null;
console.log(nul);
console.log(typeof nul);

var und = undefined;
console.log(und);
console.log(typeof und);

var myFunction = function() {
    return "Functie goala";
}
console.log(myFunction.toString());
console.log(typeof myFunction);
console.log(myFunction);

var car = {type: "Tesla", model: "Model X", color:"Black"};
console.log(car);
console.log(typeof car);

var arr = [1,2,3];
console.log(arr);
console.log(typeof arr);
// Ex 3
var x=13;
var base2 = parseInt('1101',2);
var base8 = x.toString(8);
console.log(base8);
var base16 = x.toString(16);
console.log(base16);

// ex 4

var numberInt = 123456;
console.log(numberInt);
var fractionInt = numberInt/1000;
console.log(fractionInt);
var posExponent = .123456e3;
console.log(posExponent);
var negExponent = 123456e-3;
console.log(negExponent);

var inf = Infinity;
console.log(Infinity);
console.log(inf);
console.log(10/0);
var ooo = Number.MAX_VALUE * 2;
console.log(ooo);

console.log(NotANumber);
console.log(NaN);
console.log(0/0);
console.log(nume/10);
console.log(Infinity-Infinity);
console.log(Infinity*"a");

// Ex 5.1

var exemplu = 123.456;

console.log(isNaN(exemplu));
console.log(isFinite(exemplu));

// Ex 6

var poezie = "Ana are mere, \t pere si \n 'suc."
console.log(poezie);
var poezieMare = poezie.toUpperCase();
console.log(poezieMare);
console.log(poezie.indexOf("Ana are mere, \t pere si \n 'suc."));

// Ex 7 Generate Falsy and truthy 6 times

console.log(false);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!document.all);
console.log(!!0);

console.log(true);
console.log(!!" ");
console.log(!!50);
console.log(!!car);
console.log(!!arr);
console.log(!!Infinity);

// Ex 8

var myAdvFunc = function yourFunc() {
    console.log('Merge');   
}

console.log(myAdvFunc);
console.log(myAdvFunc());
console.log(typeof myAdvFunc);

// Ex 9

var identitate = {
    name: 'Alexandru', 
    birthdate: [08,02,1986], 
    signature: function semnatura() { 
        console.log('Alexandru Tudorache');} 
    }

console.log(identitate);

// Ex 10

var adina = ['Popovici', 25, [10,7,9]];
console.log(adina);

var andrei = Array('Ionescu', 24, [7,6,4]);
console.log(andrei);

var nicu = new Array(andrei, adina) 
console.log(nicu);

// Ex 11

var var1 = new Number(3);
var var2 = 3;
console.log(var1.toString(), typeof var1);
console.log(typeof var2);

// Ex 12

console.log(nul + );
