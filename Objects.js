// // Ex 2
// var car = {};
// var car2 = new Object();
// var car3 = Object.create(Object.prototype);

// console.log('Obiectul 1: ' + car,  'Obiectul 2: ' + car2,  'Obiectul 3: '+ car3);


// // Ex 3

// car.make = "Fiat";
// car.year = 2003;
// console.log(car);
// delete car.make;
// console.log(car);

// Ex 4

var minge = {
    _diametru: 14,
    _tip: 'minge de fotbal',
    _culoare: 'alb',
    get diametru() {
        return this._diametru;
    },
    set diametru(diam) {
        this._diametru = diam;
        console.log('Diametrul este ' + diam);
    },
    get tip() {
        return this._tip;
    },
    set tip(tip){
        this._tip = tip;
        console.log("Tipul mingii este " + tip);  
    },
    get culoare() {
        return this._culoare;
    },
    set culoare(color) {
        this._culoare = color;
        console.log('Culoarea este ' + color);
    }
}

console.log(minge.culoare);

minge.culoare = "blue";
minge.diametru = 200;
minge.tip = "basket";

console.log(minge);

// Ex 5

console.log('culoare' in minge);
console.log(minge.hasOwnProperty('culoare'));

console.log(minge.hasOwnProperty('toString'));
console.log('toString' in minge);

console.log(minge.propertyIsEnumerable('culoare'));
console.log(minge.propertyIsEnumerable('toString'));

// Ex 6

Object.defineProperty(minge, "_diametru", {
    value: 12,
    enumerable: false,
    configurable: false,
    writable: false,
})

Object.defineProperty(minge, "diametru", {
    get: function () { return this._diametru *2 },
    set: function (param) { this._diametru = param }
})

Object.defineProperty(minge, "culoare" , {
    value: "Alb",
    writable: false
});

console.log(minge.culoare);
