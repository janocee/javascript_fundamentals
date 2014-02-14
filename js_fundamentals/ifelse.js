// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").


function greaterNum(num1, num2) {
	if (num1 > num2) {
		console.log("The greater number of " + num1 + " and " + num2 + " is " + num1)
	} else {
		console.log("The greater number of " + num2 + " and " + num1 + " is " + num1)
	}
}

greaterNum(12, 10)

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(code){
	if (code === "es") {
		console.log("Hola Mundo!")
	} else if (code === "fr") {
		console.log("Bonjour tout le Monde!")
	} else if (code === "jp") {
		console.log("ハローワールド!")
	} else
		console.log("Hello World!")
}
helloWorld("jp")

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score) {
	if (score < 70) {
		console.log("Your score is a C.");
	}	else if (score >= 70 && score < 80) {
		console.log("Your score is a B.");
	} else if (score >= 80 && score < 90) {
		console.log("Your score is an A.");
	} else {
		console.log("Your score is an A+.");
	}
}

assignGrade(80)
// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, num) {
	if (num > 1) {
		console.log(num + " " + noun + "s")
	} else {
		console.log (num + " " + noun)
	}
}

pluralize("step", 17)
pluralize("phone", 1)

