var Calculator = {
  made_by: "Gayatri",
  sum: function (n1, n2) {
    var r = n1 + n2;
    return r;
  },
  difference: function (n1, n2) {
    var r = n1 - n2;
    return r;
  },
  product: function (n1, n2) {
    var r = n1 * n2;
    return r;
  },
  quotient: function (n1, n2) {
    var r = n1 / n2;
    return r;
  },
  upgradedSum: function () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result = result + arguments[i];
      return result;
    }
  },
  upgradedProduct: function () {
    var result = 1;
    for (var i = 0; i < arguments.length; i = i + 1) {
      result = arguments[i] * result;
    }
    return result;
  },
  upgradedQuotient: function () {
    var result = arguments[0];
    for (var i = 1; i < arguments.length; i = i + 1) {
      result = result / arguments[i];
      return result;
    }
  },
  upgradedDifference: function () {
    var result = arguments[0];
    for (var i = 1; i < arguments.length; i = i + 1) {
      result = result - arguments[i];
    }
    return result;
  }, // <-- last property
  // Math.random() -> generates a random number between 0 and 1
  random: Math.random() + 1,
  not_random: 1,
  totally_random: 36,
};

console.log(
  Calculator.upgradedSum(
    Calculator.random + Calculator.not_random + Calculator.totally_random
  )
);
