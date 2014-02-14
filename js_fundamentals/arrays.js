// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var myChoices = ['Zelda', 'Skyrim', 'Portal', 'Batman']

for (var i = 0; i < myChoices.length; i++) {
switch (i + 1)
	{
		case 1:
			console.log("My 1st choice is " + myChoices[i]);
			break;
		case 2:
			console.log("My 2nd choice is " + myChoices[i]);
			break;
		case 3:
			console.log("My 3rd choice is " + myChoices[i]);
			break;
		case 4:
			console.log("My 4th choice is " + myChoices[i]);
      break;
	}
}

