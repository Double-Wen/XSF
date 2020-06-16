let num1 = 32;
let num2 = +Infinity;
let num3 = num1 + num2;

console.log(num3 === num2);
console.log(NaN);

console.log(1/0);
console.log(0/0);

const bigIBig = 12345678900987654321n;
console.log(bigIBig);
foo = BigInt(123456);
console.log(foo);

let str1 = "Hello";
let str2 = "World";
let phrase = `${str1} Double Wen`;
console.log(phrase);

console.log(`the result is ${5 + 3}`);
console.log("${}");
console.log(`${NaN}`);


let x = true;
console.log(x);
let y = false;
console.log(y);
let z = Boolean("true");
console.log(z);
let zz = Boolean("");
console.log(zz);
let zzz = Boolean("false");
console.log(zzz);
function ff() {
    console.log(NaN);
}

ff();

let isSmall = 5<3;
console.log(isSmall);


let price = null;
console.log(price);
let bar = undefined;
console.log(bar);
let world;
console.log(world);










