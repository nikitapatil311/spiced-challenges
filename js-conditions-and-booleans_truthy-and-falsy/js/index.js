const truthyOrFalsy = Boolean(3 >= 2);
console.log("The expression is " + truthyOrFalsy);

const torf1 = Boolean(2 == "2");
console.log("the expression is torf1 " + torf1);

const torf2 = Boolean(2 === "2");
console.log("the expression is torf2 " + torf2);

const torf3 = Boolean(2 === 2);
console.log("the expression is torf3 " + torf3);

const torf4 = Boolean("Hello World");
console.log("the expression is torf4" + torf4);

const torf5 = Boolean(" ");
console.log("the expression is torf5 " + torf5);

const torf6 = Boolean(true);
console.log("the expression is torf6 " + torf6);

const torf7 = Boolean(0);
console.log("the expression is torf7 " + torf7);

const torf8 = Boolean(-50);
console.log("the expression is torf8 " + torf8);

const torf9 = Boolean(50);
console.log("the expression is torf9 " + torf9);

const torf10 = Boolean(5 > 1);
console.log("the expression is torf10 " + torf10);

const torf11 = Boolean(" 1 > 10");
console.log("the expression is torf11  " + torf11);

const torf12 = Boolean("false");
console.log("the expression is torf12 " + torf12);
