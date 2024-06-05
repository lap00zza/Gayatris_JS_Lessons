// n1 and n2 are the arguments of the function sum
// Inside a function we have a "reusable" piece of logic

function sum(n1, n2) {
  var r = n1 + n2;
  return r;
}

function difference(n1, n2) {
  var r = n1 - n2;
  return r;
}

function product(n1, n2) {
  var r = n1 * n2;
  return r;
}

function quotient(n1, n2) {
  var r = n1 / n2;
  return r;
}

function upgradedSum() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result = result + arguments[i];
    // 1 -> result = 0 + 1 = 1
    // 2 -> result = 1 + 2 = 3
  }
  return result;
}

console.log("upgrade sum: " + upgradedSum(1, 2, 3));
console.log("upgrade sum: " + upgradedSum(1, 2, 3, 4, 5, 6, 7, 8));

function upgradedDifference() {
  var result = arguments[0]; // 17
  // i < 4
  // length = 4
  for (var i = 1; i < arguments.length; i = i + 1) {
    result = result - arguments[i];
    // result = 17
    // 17 - 5 = 12
    // 12 - 4 = 8
    // 8 - 1 = 7
  }
  return result;
}

console.log("upgrade difference: " + upgradedDifference(9, 5, 3)); // 1
console.log("upgrade difference: " + upgradedDifference(17, 5, 4, 1)); // 7

function upgradedProduct() {
  var result = 1;
  // ++i <-- prefix
  // i++ <-- postfix
  for (var i = 0; i < arguments.length; i = i + 1) {
    result = arguments[i] * result;
  }
  return result;
}

console.log("upgrade product: " + upgradedProduct(17, 6, 2));
console.log("upgrade product: " + upgradedProduct(4, 2, 5));

// a / b <-- Division Operator (divison )
// a % b <-- Modulo Operator (remainder of division)
function upgradedQuotient() {
  var result = arguments[0];
  for (var i = 1; i < arguments.length; i = i + 1) {
    result = result / arguments[i];
  }
  return result;
}

console.log("upgrade quotient: " + upgradedQuotient(24, 4));
console.log("upgrade quotient: " + upgradedQuotient(2, 184, 552));
