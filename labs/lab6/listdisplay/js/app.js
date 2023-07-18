// Author: Kelly Kuhn
// Date: July 17, 2023; July 18, 2023

/* Create an HTML5 application with a collection (array of objects) in 
JavaScript that with entries for something you have a collection of 
(movies, books, rocks, bugs.. what have you). Each object must have 
at least 3 properties. Use a loop in JavaScript to loop through those 
elements, and create a div for each that display the data, place that 
element on the page.

Include in this loop at least one IF statement that changes an element's 
style based on some property. For instance, perhaps if a bug's length 
property is greater than 5cm, you set the background color of that 
element to yellow. Your data must be set up in a way to force this 
change to happen for at least one of your elements. */


// Define the movie collection
var movies = [
    { title: "Alien", director: "Ridley Scott", length: 157},
    { title: "Aliens", director: "James Cameron", length: 217},
    { title: "Alien 3", director: "David Fincher", length: 154},
    { title: "Alien Resurrection", director: "David Fincher", lenght: 154},
    { title: "Alien Covenant", dicrector: "Ridley Scott", lenght: 203},
    { title: "Prometheus", director: "Ridley Scott", length: 204 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", length: 142},
    { title: "Pulp Fiction", director: "Quentin Tarantino", length: 154},
    { title: "Star Wars", director: "George Lucas", length: 121},
    { title: "The Empire Strikes Back", director: "Irvin Kershner", length: 124},
];

// Loop through the movies and create div elements for each
var movieListDiv = document.getElementById("movieList");
for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];

    // Create a new div for the movie
    var movieDiv = document.createElement("div");
    movieDiv.className = "movie";

    // Set the content of the movie div using the innerHTML
    movieDiv.innerHTML = "<strong>Title:</strong> " + movie.title + "<br>" +
                         "<strong>Director:</strong> " + movie.director + "<br>" +
                         "<strong>Length:</strong> " + movie.length + " minutes";

    // Apply the highlight class if the length is greater than 150
    if (movie.length > 150) {
        movieDiv.classList.add("highlight");
    }

    // Append the movie div to the movie list
    movieListDiv.appendChild(movieDiv);
}