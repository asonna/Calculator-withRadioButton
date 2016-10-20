// Business Logic

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// End Business Logic
// User Floaterface
$(function() {
	$("form#input").submit(function() {
		event.preventDefault();
    var userSelection = $("input:radio[name=operator]:checked").val();

		var number1 = parseFloat($("#input1").val());
		var number2 = parseFloat($("#input2").val());

    if (userSelection === "add") {
      var result = add(number1, number2);
    } else if (userSelection === "subtract") {
      var result = subtract(number1, number2);
    } else if (userSelection === "multiply") {
      var result = multiply(number1, number2);
    } else {
      var result = divide(number1, number2);
    }

		$("#output").text(result);
	});

});
