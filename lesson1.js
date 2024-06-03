// var -> variable

// Variable

// -> variable declaration
// -> ; means end of a statement
var a; // location in memory called a
var b; // location in memory called b
var c; // location in memory called b

// variable definition
a = 12; // <------
b = "Gayatri";
c = 10;
console.log(`a: ${a}, b: ${b}, c: ${c}`);
console.log(2 + -3); //
console.log(a * 4); //
console.log(-5 / a); //
console.log(a + c); //
console.log(b); // Gayatri
// number + number -> number
// but, string + number -> string
// 10 -> "10"
// "10" + "Gayatri" (joining 2 strings)
console.log(b + c);

var d = "Hello";
var e = "world.";
console.log(d + "-+-" + e);

console.log("----");
a = 7 + 9 * 5; // << 52
console.log(`a: ${a}`);
a = a + c + a; // 52 + 10 + 52 = 114
console.log(a);
var full = d + e;
console.log(full);

// Constant <<-- variables that can not be changed
const rate = 5;
console.log(rate);

// rate = 10; // Error -> Assignment to a constant variable

// Function
var num1 = 2;
var num2 = 4;
var result = num1 + num2;
console.log(num1 + " + " + num2 + " = " + result);

function sum(n1, n2) {
  var r = n1 + n2;
  return r;
}

var sum1 = sum(1, 2); // 3
var sum2 = sum(5, 10); // 15
var sum3 = sum(30, 40); // 70
var sum4 = sum(1, 2) + sum(4, 5) + sum(5, 6); // 23
var sum5 = sum(sum(5, 6), sum(7, 8)); // 26

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);

var totallyRandom = 0;
var GayatriMath = {
  add: function (n1, n2) {
    var r = n1 + n2 + 98;
    return r;
  },
  random: function () {
    totallyRandom = totallyRandom + 1;
    return totallyRandom;
  },
};
console.log(Math.random());
console.log(GayatriMath.add(1, 1));
console.log(GayatriMath.random());
console.log(GayatriMath.random());
console.log(GayatriMath.random());
console.log(GayatriMath.random());
console.log(GayatriMath.random());
console.log(GayatriMath.random());

var fullName = "Tom" + "Hanks";
var fullName2 = "Tom" / "Hanks";
var definitelyAnArray = [1, 2, 3, 4, 5, 6] + "__99__ABCD";
var notAnArray = "[1, 2, 3, 4, 5, 6]" + " __99__ABCD";
var num1 = 1;
var str1 = "1";
console.log("IT PRNTS A STRING ONLY");
console.log(2);
console.log(fullName);
console.log(fullName2);
console.log(definitelyAnArray);
console.log(notAnArray);
console.log(num1 + 1);
console.log(str1 + 1);

var Gayatri = {
  class: 8,
  board: "CIE",
  strengths: ["Maths", "Definitely Substraction", "Programming"],
  favourite_numbers: [10, 30, 555],
};

var GayatriInAnArray = [
  8, // 0
  "CIE", // 1
  ["Maths", "Definitely Substraction", "Programming"], // 2
  [10, 30, 555], // 3
];

console.log(Gayatri.class);
console.log(Gayatri.board);
console.log(Gayatri.strengths);

console.log(GayatriInAnArray[2]);
