function zero(value) {
  if (value == undefined) return 0;
  else {
    switch (value.charAt(0)) {
      case "+":
        return 0 + value.charAt(1) * 1;
      case "-":
        return 0 - value.charAt(1) * 1;
      case "*":
        return 0 * value.charAt(1);
      case "/":
        return Math.floor(0 / value.charAt(1));
      default:
        return value;
    }
  }
}

function one(value) {
  if (value == undefined) return 1;
  else {
    switch (value.charAt(0)) {
      case "+":
        return 1 + value.charAt(1) * 1;
      case "-":
        return 1 - value.charAt(1) * 1;
      case "*":
        return 1 * value.charAt(1);
      case "/":
        return Math.floor(1 / value.charAt(1));
      default:
        return value;
    }
  }
}

function two(value) {
  if (value == undefined) return 2;
  else {
    switch (value.charAt(0)) {
      case "+":
        return 2 + value.charAt(1) * 1;
      case "-":
        return 2 - value.charAt(1) * 1;
      case "*":
        return 2 * value.charAt(1);
      case "/":
        return Math.floor(2 / value.charAt(1));
      default:
        return value;
    }
  }
}

function three(value) {
  if (value == undefined) return 3;
  else {
    switch (value.charAt(0)) {
      case "+":
        return 3 + value.charAt(1) * 1;
      case "-":
        return 3 - value.charAt(1) * 1;
      case "*":
        return 3 * value.charAt(1);
      case "/":
        return Math.floor(3 / value.charAt(1));
      default:
        return value;
    }
  }
}

function four(value) {
  if (value == undefined) return 4;
  else {
    switch (value.charAt(0)) {
      case "+":
        return 4 + value.charAt(1) * 1;
      case "-":
        return 4 - value.charAt(1) * 1;
      case "*":
        return 4 * value.charAt(1);
      case "/":
        return Math.floor(4 / value.charAt(1));
      default:
        return value;
    }
  }
}

function five(value) {
  if (value == undefined) return 5;
  else {
    switch (value.charAt(0)) {
      case "+":
        return 5 + value.charAt(1) * 1;
      case "-":
        return 5 - value.charAt(1) * 1;
      case "*":
        return 5 * value.charAt(1);
      case "/":
        return Math.floor(5 / value.charAt(1));
      default:
        return value;
    }
  }
}

function six(value) {
  if (value == undefined) return 6;
  else {
    switch (value.charAt(0)) {
      case "+":
        return 6 + value.charAt(1) * 1;
      case "-":
        return 6 - value.charAt(1) * 1;
      case "*":
        return 6 * value.charAt(1);
      case "/":
        return Math.floor(6 / value.charAt(1));
      default:
        return value;
    }
  }
}

function seven(value) {
  if (value == undefined) return 7;
  else {
    switch (value.charAt(0)) {
      case "+":
        return 7 + value.charAt(1) * 1;
      case "-":
        return 7 - value.charAt(1) * 1;
      case "*":
        return 7 * value.charAt(1);
      case "/":
        return Math.floor(7 / value.charAt(1));
      default:
        return value;
    }
  }
}

function eight(value) {
  if (value == undefined) return 8;
  else {
    switch (value.charAt(0)) {
      case "+":
        return 8 + value.charAt(1) * 1;
      case "-":
        return 8 - value.charAt(1) * 1;
      case "*":
        return 8 * value.charAt(1);
      case "/":
        return Math.floor(8 / value.charAt(1));
      default:
        return value;
    }
  }
}

function nine(value) {
  if (value == undefined) return 9;
  else {
    switch (value.charAt(0)) {
      case "+":
        return 9 + value.charAt(1) * 1;
      case "-":
        return 9 - value.charAt(1) * 1;
      case "*":
        return 9 * value.charAt(1);
      case "/":
        return Math.floor(9 / value.charAt(1));
      default:
        return value;
    }
  }
}

function plus(number) {
  return "+" + number;
}

function minus(number) {
  return "-" + number;
}

function times(number) {
  return "*" + number;
}

function dividedBy(number) {
  if (number == 0) return "Division by zero!";
  else return "/" + number;
}
