// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe = {
	title: "Mole",
	servings: 2,
	ingredients: ["cinnamon", "cumin", "cocoa"]
}

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);


// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var books = [
	{
		title: "Harry Potter",
		author: "J.K. Rowling",
		alreadyRead: true
	},
	{
		title: "Ender's Game",
		author: "Orson Scott Card",
		alreadyRead: true
	},
	{
		title: "Mr. Mercedes: A Novel",
		author: "Stephen King",
		alreadyRead: false
	}
];

for (i = 0; i < books.length; i++) {
	if (books[i].alreadyRead == true) {
		console.log("You already read " + books[i].title + " by " + books[i].author);
	}
	else {
		console.log("You still need to read " + books[i].title + " by " + books[i].author);
	};
}

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var movies = [
{
	title: "Ender's Game",
	duration: 145,
	stars: ["Harrison Ford", "Asa Butterfield", "Ben Kingsley"]
},
{
	title: "Alice in Wonderland",
	duration: 108,
	stars: ["Jonny Depp", "Helena Bonham Carter", "Mia Wasikowska"]
}
];
function myIMDB(movie) {
for (i = 0; i < movies.length; i++) {
	console.log( movies[i].title + " lasts for " + movies[i].duration + " minutes. Stars: " + movies.stars.join(", "));
}
}

