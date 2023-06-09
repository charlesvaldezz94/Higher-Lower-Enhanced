let num = 1;
let max = 1;
let guessArray = [];

function prompt() {
    let promptMessage = document.getElementById("promptMessage");
    max = Number(document.getElementById("maxNumber").value);
    num = Math.floor(Math.random() * max) + 1;
    let maxNaN = isNaN(max);


    if (maxNaN === true) {
        promptMessage.innerHTML = "That is not a number, try again."
    }
    else {
        if (max === 0 || max < 0) {
            promptMessage.innerHTML = "You cannot choose a value less than or equal to zero."
        }
        else {
            if (max % 1 != 0) {
                max = Math.round(max);
                promptMessage.innerHTML = `The max number will be ${max}, please choose a number between 1 - ${max}`
            }
            else {
                promptMessage.innerHTML = `The max number will be ${max}, please choose a number between 1 - ${max}`
        }
    }

    console.log(`The max number will be ${max} and the number chosen is: ${num}`);
    return num, max;
};

function guessNumber() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");
    let winMessage = document.getElementById("winMessage");
    let guessNaN = isNaN(guess);


    if (num === 0) {
        message.innerHTML = "You have not chosen a max value yet. Try again."
    }
    if (guessNaN === true) {
        message.innerHTML = "That is not a number. Try again"
    }
    else {
        if (guess > max || guess < 0 || guess === 0) {
            message.innerHTML = "The number you have chosen is out of range. Try again."
        }
        else {

            if (guess === 0) {
                message.innerHTML = "You have not placed a value. Try again."
            }
            else {
                if (guess === num) {
                    if (guessArray.find(element => element === guess)) {
                        message.innerHTML = "You have already guessed that number";
                    }
                    else {
                        guessArray.push(guess);

                        winMessage.innerHTML = `Right on the money, great job! You have guessed the number in ${guessArray.length} tries! Here are your guesses! ${guessArray}!`
                        window.alert("Winner!!!");

                    }
                };
                if (guess > num) {
                    if (guessArray.find(element => element === guess)) {
                        message.innerHTML = "You have already guessed that number";
                    }
                    else {
                        guessArray.push(guess);

                        message.innerHTML = "Guess a lower number!"
                    }
                };
                if (guess < num) {
                    if (guessArray.find(element => element === guess)) {
                        message.innerHTML = "You have already guessed that number";
                    }
                    else {
                        guessArray.push(guess);

                        message.innerHTML = "Guess a higher number!"
                    }
                }
                console.log(guessArray);
                console.log("number of guesses = " + guessArray.length);;


            }

        }

        console.log(`Your guess is ${guess}`);


    }
}};