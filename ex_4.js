var a=3;

for (let index = 0; index < a ; index++) {
    console.log(a--);
}

for (let index = 0; index < 4 && a < 4; index++) {
    console.log(++a);
}

console.log(101010 | 111111);

console.log((101010).toString(2));
console.log((111111).toString(2));

console.log(parseInt(11000101010010010,2));
console.log(parseInt(11011001000000111,2));

console.log((parseInt(
    11000101010010010,2) | parseInt(
    11011001000000111,2)).toString(2));

