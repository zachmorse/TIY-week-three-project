var calcString = "";
var nums = document.querySelectorAll(".content");
var buttonClr = document.getElementById("button-clr");
var buttonEquals = document.getElementById("button-equals");

buttonClr.addEventListener("click", buttonClear);
buttonEquals.addEventListener("click", buttonEvaluate);

function concatNum(event) {
  var value = event.target.textContent;
  calcString += value;
  displayUpdate();
}

function displayUpdate() {
  document.getElementById("display").innerHTML = calcString;
}

function buttonClear() {
  calcString = "";
  displayUpdate();
}

function buttonEvaluate() {
  var typeChecker = calcString.charAt(calcString.length - 1);

  if (
    typeChecker == "/" ||
    typeChecker == "*" ||
    typeChecker == "+" ||
    typeChecker == "-"
  ) {
    document.getElementById("display").innerHTML = "Invalid";
    setTimeout(buttonClear, 500);
  } else {
    calcString = +eval(calcString).toFixed(4);
    displayUpdate();
  }
}

for (var i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", concatNum);
}
