let exp = "";
const display = document.getElementById("display");
display.value = exp;

const op = "+-*/";

function append(val) {
  if (val === "%") {
    if (exp !== "") {
      exp = String(eval(exp) / 100);
      exp += "*";
      display.value = exp;
    }
    return;
  }

  if (op.includes(val)) {
    if (op.includes(exp.slice(-1))) return;
  }

  exp += val;
  display.value = exp;
}

function calculate() {
  try {
    if (exp === "") exp = "0";
    exp = parseFloat(eval(exp)).toFixed(4);
    exp = parseFloat(exp).toString();
    display.value = exp;
    exp = "";
  } catch (err) {
    document.getElementById("input-box").style.border = "2px solid red";
    document.getElementById("err").innerHTML =
      err.message || "Invalid expression";

    setTimeout(() => {
      document.getElementById("input-box").style.border = "1px solid gray";
      document.getElementById("err").innerHTML = "";
    }, 1000);
  }
}

function clearDisplay() {
  exp = "";
  display.value = "";
}

function del() {
  exp = exp.slice(0, -1);
  display.value = exp;
}

console.log("app.js loaded");
