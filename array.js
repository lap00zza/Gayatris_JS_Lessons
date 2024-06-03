// Array

// variables can hold "values" of different types.
// numbers like 1,2,4 etc
// strings like "hey", "hi" etc

// INDEX of an array is the location of the item inside the array
// It starts with 0.
//        0        1       2
var a = ["red", "green", "blue"];

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[0] + " " + a[1] + " " + a[2]);

//  INDEX -> 0  1  2  3  4  5  6  7  8  9
var marks = [8, 2, 3, 4, 5, 6, 7, 8, 7, 1];
console.log(marks.length);
// index starts with 0
// 26th -> 25

// i++ -> i = i + 1
console.log("----");
// For loop Loop
//counter var |    condition    | step
for (var i = 0; i < marks.length; i = i + 1) {
  console.log(marks[i]);
}

console.log("----");
//counter var |    condition    | step
for (var i = 5; i < marks.length; i = i + 1) {
  console.log(marks[i]);
}

console.log("----");
//INDEX of the last item of an array is the (length of an array - 1)
for (var i = marks.length - 1; i >= 0; i = i - 1) {
  console.log(marks[i]);
}
