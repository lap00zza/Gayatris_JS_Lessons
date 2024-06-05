var calcButton = document.getElementById("calc_btn");
var ogAmount = document.getElementById("og_amt");
var result = document.getElementById("res_amt");

function gst(n1) {
  n1 = Number(n1);
  var gst_rate = 0.1;
  var r = n1 * gst_rate + n1;
  return r;
}

function clickEventListener() {
  // input type elements have a value property that stores its current value
  var val = ogAmount.value;

  // innerText is used to "set" text value of an element
  result.innerText = gst(val);
}

calcButton.addEventListener("click", clickEventListener);
