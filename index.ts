#! /usr/bin/env node
import inquirer from "inquirer"

// 1) Computer will generate a random number - Done

// 2) User input for guessing number - Done

// 3) Compare user input with computer genrated number and show result - Done


const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers =  await inquirer.prompt([
    {
        name: "userGuessedNumvber",
        type: "number",
        message: "Please guess a number between 1 to 6: ",
    },
]);

if(answers.userGuessedNumvber === randomNumber ){
     console.log("Congratulation! You guessed the right number.")
} else{
    console.log("Aww! You guessed the wrong number.")
}






console.log(answers);
