#! /usr/bin/env node
import inquirer from "inquirer"
import chalk, { Chalk } from "chalk"

console.log(chalk.bgWhite.red(`\n\tWELCOME TO WORD COUNTER APP`)) // start greetings

let userWords: {sentence: string} = await inquirer.prompt(
   [ {
        name: "sentence",
        type: "input",
        message: chalk.bgBlue.white("\nPlease type you paragraph here:\n")
    }]
)
// write a program for cointing words
let words = userWords.sentence.trim().split(" ")

// write a program for counting characters
let characters = userWords.sentence.replace(/\s/g,"")

// print above write programs

console.log(chalk.bgWhite.green(`\nYou have typed ${words.length} wrods in this paragraph`)) // shows the court

console.log(chalk.bgWhite.blue(`\nYou have typed ${characters.length} characters in this paragraph`)) // shows the character count

console.log(chalk.bgRed.white(`\n\tTHANKYOU FOR TYPING PARAGRAPH HERE`))// end greetings