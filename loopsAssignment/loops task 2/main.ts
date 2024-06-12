//    ............. Task 2 .............

/*. Guessing Game (Using while loop)
Objective: Create a simple number guessing game where the user tries to guess a randomly generated number between 1 and a specified maximum value using a predefined set of guesses.
Steps to Follow:
1. Set a maximum value: Create a variable to store the maximum value for the number
guessing game.
2. Generate a random number: Use Math.random() and Math.floor() to generate a random number between 1 and the maximum value. Log this value to the console for development purposes.
3. Track the guess status: Create a variable to track whether the user's guess is correct. Set it to false initially.
4. Simulate user guesses: Use an array to store a series of predefined guesses.
5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the correct guess is made.
6. Check the user's guess: Inside the loop, check if the current guess matches the random number. Provide feedback if the guess is too high or too low."*/


let maxValue:number = 60;

let randomNum: number = Math.floor(Math.random() * 60) + 1; 
console.log("The Random Number is", randomNum);

let correctGusess: boolean = false;

let DefinedGuesses: number[] = [10,20,30,40,50];

let indexNumber:number = 0;

while(!correctGusess && indexNumber < DefinedGuesses.length) {
let currentGuesses = DefinedGuesses [indexNumber];
if(currentGuesses === randomNum) {
correctGusess = true;
console.log("congratulation you guessed the correct number", randomNum);
}
else if(currentGuesses < randomNum) {console.log("your current guesses is to low!")
}
else {
console.log("your guesses is to high!")
}
indexNumber++;
}
if (!correctGusess) {
console.log("Sorry, you did not correct guess number", randomNum)
};