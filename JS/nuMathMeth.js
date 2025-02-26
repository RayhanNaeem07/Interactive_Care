const favSeries = "got";

let guess = prompt("Guess fav series name");

while (guess != favSeries && guess != "quit") {
  guess = prompt("Please try again");
}

if (guess == favSeries) {
  console.log("Congrats");
} else {
  console.log("You quit");
}
