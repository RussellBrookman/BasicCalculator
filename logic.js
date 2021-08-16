$(document).ready(function() {

	var firstNumber = "";
  var secondNumber = "";
	var operator = "";
	var result = 0;
	var hasNumber = false;
	var firstNumberComplete = false;
	var lockButtons = false;

	$(document).on("click", "button", function() {
		// !lockButtons makes sure it's not the end of the calculation
	  if ($(this).hasClass("number") && !lockButtons) {
	    hasNumber = true;
	    if (firstNumberComplete === false) {
	      firstNumber += $(this).attr("value");
	      console.log(firstNumber);
				// Print, look at the result pannel
	      $("#first-number").html(firstNumber);
	    }
	    else {
	      secondNumber += $(this).attr("value");
	      console.log(secondNumber);
	      $("#second-number").html(secondNumber);
	    }
	  }
		// if its an operator and not '='
	  if ($(this).hasClass("operator") && hasNumber && !lockButtons) {
	    firstNumberComplete = true;
			// show the operator's symbol
	    $("#operator").html("<h1>" + $(this).text() + "</h1>");
	      operator = $(this).attr("value");
	  }
	  if ($(this).hasClass("equal")) {
	  	// lock the keyboard
	    lockButtons = true;
	    firstNumber = parseInt(firstNumber);
      secondNumber = parseInt(secondNumber);
      // calculations
	    if (operator === "plus") {
	      result = firstNumber + secondNumber;
	    }
	    if (operator === "minus") {
	      result = firstNumber - secondNumber;
	    }
	    if (operator === "times") {
	      result = firstNumber * secondNumber;
	    }
	    if (operator === "divide") {
	      result = firstNumber / secondNumber;
	    }
	    if (operator === "power") {
	      result = Math.pow(firstNumber, secondNumber);
	    }
	    // print to the result box
	    $("#result").html(result);
	  }
	  // clear = reset everything
	  if ($(this).hasClass("clear")) {
	    firstNumber = "";
	    secondNumber = "";
	    operator = "";
	    result = 0;
	    hasNumber = false;
      firstNumberComplete = false;
	    lockButtons = false;

	   	$("#first-number, #second-number, #operator, #result").empty();
	  }
	});
});
