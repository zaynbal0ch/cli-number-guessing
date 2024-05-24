#! /usr/bin/env node
import inquirer from "inquirer";
const maxGuesses = 3; // Maximum number of guesses allowed
async function guessNumber() {
    let guessesleft = maxGuesses;
    let correctGuess = false; // Flag to track if the user guessed the number correctly.
    while (guessesleft > 0 && !correctGuess) {
        const randomNumber = Math.floor(Math.random() * 10 + 1);
        const answers = await inquirer.prompt([
            {
                type: "number",
                name: "userGuess",
                message: `Guess a number between 0 to 10 and write it (You have ${guessesleft} guesses left);`,
            },
        ]);
        const { userGuess } = answers;
        console.log(`Guessed No: ${userGuess}, Correct answer is: ${randomNumber}`);
        if (userGuess === randomNumber) {
            console.log("Correct Answer! Congratulation, You won!");
            correctGuess = true; // Set the flag to true if the guessed number is correct.
        }
        else {
            console.log("Wrong Answer!");
            guessesleft--; // Decrement the number of guesses left
            if (guessesleft > 0) {
                console.log(`You have ${guessesleft} guesses left.`);
            }
        }
    }
    if (!correctGuess) {
        console.log(`Out of guesses. Better luck next time.!`);
    }
}
guessNumber();
