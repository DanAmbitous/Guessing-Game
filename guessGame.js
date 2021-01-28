const letters = "abcdefghijklmnopqrstuvwxyz";
let randomLetters = "";

while (randomLetters.length < 6) {
    randomLetters += letters[Math.floor(Math.random() * letters.length)];
}

let guesses = randomLetters.length + 10;

let answer = [];
for (let i = 0; i < randomLetters.length; i++) {
    answer[i] = "_";
}

let lettersLeft = randomLetters.length;

while (lettersLeft > 0) {
    alert(answer.join(" "));

    alert(guesses)

    let guess = prompt("Please input a single letter");

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please input exactly one letter");
    } else if (guess == answer) {
        alert("This letter has already been guessed");
    } else {
        guesses--;
        for (let index = 0; index < randomLetters.length; index++) {
            if (guess === randomLetters[index]) {
                answer[index] = guess;
                lettersLeft--;
            }
        }
    }
}


alert(`Game over, your guess ${answer.join(" ")}`);
alert(`The word is ${randomLetters}`);