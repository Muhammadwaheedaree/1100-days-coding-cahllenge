// Swapping Variable:
function swapValues() {
  let a = 5,
    b = 10;
  console.log("Before swap:a=", a, "b=", b);

  let temp = a;
  a = b;
  b = temp;
  console.log("After swap: a=", a, "b=", b);
}
swapValues();
