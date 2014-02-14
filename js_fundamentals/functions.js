// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(partner, numKids, location, jobTitle) {
	console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids.")
}

tellFortune("Beyonce", 6, "Haiti", "sound check guy");
tellFortune("Stephen Fry", 16, "Sydney", "the clown");
tellFortune("Allan Rickman", 1, "Brazil", "famous pop star");


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function calculateAge(birthYear, currentYear) {
	var age1 = currentYear - birthYear;
	var age2 = currentYear - birthYear - 1;
	console.log("You are either " + age1 + " or " + age2)

}

calculateAge(1986, 2014)
calculateAge(1938, 2014)
calculateAge(1909, 2048)

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amtDay) {
	lifetime = Math.round(115-age) * amtDay
	console.log("You will need " + lifetime + " to last you until the ripe old age of 115")
}

calculateSupply(25, 10)

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(rad) {
	circumference = 2*Math.PI*rad
	console.log("The circumference is " + circumference)
}
calcCircumfrence(14)

function calcArea(rad) {
	area = Math.PI*(rad*rad)
	console.log("The area is " + area)
}

calcArea(10)

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(temp) {
	ctemp = temp
	ftemp = ((9/5) * temp) + 32
	console.log(temp + "°C is " + ftemp + "°F")
}

celsiusToFahrenheit(10)

function fahrenheitToCelsius(temp) {
	ftemp = temp
	ctemp = (5/9) * (temp - 32)
	console.log(temp + "°F is " + ctemp + "°C")
}

fahrenheitToCelsius(50)