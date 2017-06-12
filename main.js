//
// This program will:
// 1. listen for keypresses of each element
// 2. display each keypress in display panel
// 3. functions will append element to array when pressed
// 4. array is appended with each keypress
// 5. array elements will be joined together and made into string
// 6. string will be solved as equation by eval when "equals" is pressed
// 7. "C" button will convert array to empty array

// Declaring initial global variables:

var calcArray = [];

var button0 = document.getElementById("button-zero");
var button1 = document.getElementById("button-one");
var button2 = document.getElementById("button-two");
var button3 = document.getElementById("button-three");
var button4 = document.getElementById("button-four");
var button5 = document.getElementById("button-five");
var button6 = document.getElementById("button-six");
var button7 = document.getElementById("button-seven");
var button8 = document.getElementById("button-eight");
var button9 = document.getElementById("button-nine");

var buttonAdd = document.getElementById("button-add");
var buttonSubtract = document.getElementById("button-minus");
var buttonDivide = document.getElementById("button-divide");
var buttonMultiply = document.getElementById("button-multiply");
var buttonDecimal = document.getElementById("button-decimal");

var buttonClr = document.getElementById("button-clr");
var buttonEquals = document.getElementById("button-equals");

// adding event listeners for each clickable element:

button0.addEventListener("click", buttonZero);
button1.addEventListener("click", buttonOne);
button2.addEventListener("click", buttonTwo);
button3.addEventListener("click", buttonThree);
button4.addEventListener("click", buttonFour);
button5.addEventListener("click", buttonFive);
button6.addEventListener("click", buttonSix);
button7.addEventListener("click", buttonSeven);
button8.addEventListener("click", buttonEight);
button9.addEventListener("click", buttonNine);

buttonAdd.addEventListener("click", buttonPlus);
buttonSubtract.addEventListener("click", buttonMinus);
buttonDivide.addEventListener("click", buttonDividedBy);
buttonMultiply.addEventListener("click", buttonMultiplication);
buttonDecimal.addEventListener("click", buttonDecimalPoint);

buttonClr.addEventListener("click", buttonClear);
buttonEquals.addEventListener("click", buttonEvaluate);

// function calls for each button:

function buttonZero() {
  calcArray.push("0");
  console.log(calcArray);
}

function buttonOne() {
  calcArray.push("1");
  console.log(calcArray);
}

function buttonTwo() {
  calcArray.push("2");
  console.log(calcArray);
}

function buttonThree() {
  calcArray.push("3");
  console.log(calcArray);
}

function buttonFour() {
  calcArray.push("4");
  console.log(calcArray);
}

function buttonFive() {
  calcArray.push("5");
  console.log(calcArray);
}

function buttonSix() {
  calcArray.push("6");
  console.log(calcArray);
}

function buttonSeven() {
  calcArray.push("7");
  console.log(calcArray);
}

function buttonEight() {
  calcArray.push("8");
  console.log(calcArray);
}

function buttonNine() {
  calcArray.push("9");
  console.log(calcArray);
}

function buttonPlus() {
  calcArray.push("+");
  console.log(calcArray);
}

function buttonMinus() {
  calcArray.push("-");
  console.log(calcArray);
}

function buttonDividedBy() {
  calcArray.push("/");
  console.log(calcArray);
}

function buttonMultiplication() {
  calcArray.push("*");
  console.log(calcArray);
}

function buttonDecimalPoint() {
  calcArray.push(".");
  console.log(calcArray);
}

function buttonClear() {
  calcArray = [];
}

function buttonEvaluate() {
  var arrayToString = calcArray.join(" ");
  arrayToString = arrayToString.replace(/\s/g, "");
  console.log(arrayToString);
  console.log(eval(arrayToString));
  // calcArray = [];
  buttonClear();
}
