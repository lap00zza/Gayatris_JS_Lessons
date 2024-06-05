// function needs to accept single argument, calculate gst and return r
function gst(n1) {
  var gst_rate = 0.1;
  var r = n1 * gst_rate + n1;
  return r;
}

var gst1 = gst(5400);
console.log(gst1);
