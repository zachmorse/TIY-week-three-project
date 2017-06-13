//
// This program will:
// 1. listen for keypresses of each element
// 2. display each keypress in display panel
// 3. functions will concat to string when pressed
// 4. string is concatenated with each keypress
// 5. string elements will be joined together
// 6. string will be solved as equation by eval when "equals" is pressed
// 7. "C" button will convert string back to empty

// Declaring initial global variables:

var calcString = ""; // initial empty string for calculation
var nums = document.querySelectorAll(".content"); // gets an array of all the number and operator buttons
var buttonClr = document.getElementById("button-clr");
var buttonEquals = document.getElementById("button-equals");

buttonClr.addEventListener("click", buttonClear);
buttonEquals.addEventListener("click", buttonEvaluate);

// function calls for each button:

function concatNum(event) {
  console.log(event);
  console.log(event.target);
  var value = event.target.textContent;
  console.log("value: ", value);
  calcString += value;
  console.log("calcString: ", calcString);
  displayUpdate();
}

function displayUpdate() {
  document.getElementById("display").innerHTML = calcString;
}

for (var i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", concatNum);
}

function buttonClear() {
  calcString = "";
  displayUpdate();
}

function buttonEvaluate() {
  console.log(eval(calcString));
  buttonClear();
}
