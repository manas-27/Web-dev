const getHistory = () => {
  return document.getElementById("history-value").innerText;
};

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

const getOutput = () => {
  return document.getElementById("output-value").innerText;
};

function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormatedNumber(num);
  }
}

function getFormatedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString();
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    }

    if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        printOutput(output.substring(0, output.length - 1));
      }
    }
  });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output += this.id;
      printOutput(output);
    }
  });
}
