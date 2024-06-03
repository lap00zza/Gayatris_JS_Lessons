// n1 and n2 are the arguments of the function sum
// Inside a function we have a "reusable" piece of logic
// "reusability"
function sum(n1, n2) {
  var r = n1 + n2;
  return r;
}

// upgradedSum(1,2,3,4,5);
//
function upgradedSum() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result = result + arguments[i];
    // 1 -> result = 0 + 1 = 1
    // 2 -> result = 1 + 2 = 3
    // 3 -> result = 3 + 3 = 6
    // 4 -> result = 6 + 4 = 10
    // 5 -> result = 10 + 5 = 15
  }
  return result;
}

console.log("upgrade sum: " + upgradedSum(1, 2, 3));
console.log("upgrade sum: " + upgradedSum(1, 2, 3, 4, 5, 6, 7, 8));

function difference(n1, n2) {
  var r = n1 - n2;
  return r;
}

var difference1 = difference(23, 8); //
var difference2 = difference(89, 3); //
var difference3 = difference(64, 87); //
var difference4 = difference(999, 452); //
var difference5 = sum(difference(difference(56, 54), sum(1, 3)), 677); // <<--- smart

console.log(difference1);
console.log(difference2);
console.log(difference3);
console.log(difference4);
console.log(difference5);

function product(n1, n2) {
  var r = n1 * n2;
  return r;
}

var product1 = product(2, 4); // 8
var product2 = product(8, 946); //
var product3 = product(78, 84); //
var product4 = product(1, 20); // 20
var product5 = product(90, 8); // 720

console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);

function quotient(n1, n2) {
  var r = n1 / n2;
  return r;
}

var quotient1 = quotient(119, 7);
var quotient2 = quotient(9, 364);
var quotient3 = quotient(222, 2);
var quotient4 = quotient(72, 84);
var quotient5 = quotient(86, product(2, 2));

console.log(quotient1);
console.log(quotient2);
console.log(quotient3);
console.log(quotient4);
console.log(quotient5);
