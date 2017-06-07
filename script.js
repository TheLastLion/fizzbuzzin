for (i = 1; i <= 100; i++) {
  var s = i.toString();
  var out = "";
  if (s.charAt([0]) === "1") {
    out += "Bang";
  }
  if (i % 15 === 0) {
    out += "FizzBuzz";
    console.log(out);
  } else if (i % 3 === 0) {
    out += "Fizz";
    console.log(out);
  } else if (i % 5 === 0) {
    out += "Buzz";
    console.log(out);
  } else if (out === "") {
    console.log(i);
  } else {
    console.log(out);
  }
}
