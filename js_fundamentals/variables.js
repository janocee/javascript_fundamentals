// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var numKids = 4
var partner = "Shelly"
var geoLoc = "Arizona"
var jobTitle = "designer"

console.log("You will be in a " + jobTitle + " in " + geoLoc + ", and married to " + partner + " with " + numKids + ".")

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
var currentYear = 2014
var birthYear = 1986
var console.log("They are either " + (currentYear - birthYear -1) + " or " + (currentYear - birthYear))

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 27
var maxAge = 115
var amount = 10
var lifeAmount = (maxAge - currentAge) * 10*365
console.log("You will need " + lifeAmount + " to last you until the ripe old age of " + maxAge)


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 13
var circumference = 2*Math.PI*radius
var area = Math.PI*(radius * radius)
console.log("The circumference is " + circumference)
console.log("The area is " + area)

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var ctemp = 15
var ctof = ((9/5) * ctemp) + 32
console.log(ctemp + "°C is " + ctof + "°F")
var ftemp = 15
var ftoc = (5/9) * (ftemp - 32)
console.log(ftemp + "°F is " + ftoc + "°C")

