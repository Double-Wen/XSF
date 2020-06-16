function welcomeSite() {
    console.log(hello === undefined);
    var hello = "hello world";
}

//console.log(hello);

function ss() {
    console.log(world === undefined);
    let world = "Hello, World";
}

//console.log(world);
var a;
console.log(a !== undefined);

welcomeSite();
ss();       // 得出结论, 使用let无法进行变量提升, 更进一步地可以理解成不要var直接let
