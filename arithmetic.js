var a = 4;
var b = 7;

console.log(a*b);

var tru = true;
var fal = false;

console.log(tru/fal);

var empty = '';
var str0 = '2';
var num = '  3  ';
var str1 = 'xxx';
var nuller = NaN;

console.log(empty % str);
console.log(num+str1);
console.log(str1+nuller);

var str = [str0, str1, str2, str3, str4, str5, str6, str7];

var str2 = null;
var str3 = undefined;
var str4 = Infinity;
var str5 = NaN;
var str6 = {};
var str7 = function () {
    return 5;
}

for (let index = 0; index < 6; index++) {
    // console.log(str[index] + str [index+1]); 
    console.log(this['str' + index] + this['str' + (index+1)]);
};
