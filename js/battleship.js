let location = Math.floor(Math.random()* 5); 
let location2 = Math.floor(1 + Math.random()* 5);
let location3 = Math.floor(3 + Math.random()* 5);
let guess;
let hits = 0;
let numOfGuesses = 0;
let isSunk = false;
while (isSunk) {
    guess = prompt("ready, aim, fire! (enter a number from 0-20): ");
    if (guess > 20 || guess < 0) {
        alert("please enter a valid number!");
    }
    else {
        guess = guess + 1;
    }
    if (guess === location || guess === location2 || guess === location3) {
        alert("hit")
        hits = hits + 1;
        if (hits == 3) {
            isSunk = true;
            alert("you sunk my battle ship");
        }
    }
    else{
        alert("miss");
    }
}

let stats = "you took"+" "+ numOfGuesses + " " + "guesses, with a shooting accuracy of: "+ (3/guess);
alert(stats);






