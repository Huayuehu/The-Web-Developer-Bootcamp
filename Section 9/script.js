// var userFirstName = prompt("What is your first name?");
// var userLastName = prompt("What is your last name?");
// console.log("Your full name is " + userFirstName + " " + userLastName);
// var userAge = prompt("How old are you honey?");
// console.log("You are " + userAge + " years old!");

// var age = prompt("How old are you honey?");
// if (age < 0) {
//     console.log("ERROR!!!!!!!");
// } 
// if (age == 21) {
//     console.log("Happy 21st birthday!!");
// }
// if ((age % 2) == 1) {
//     console.log("Your age is odd!");
// }
// if (age % Math.sqrt(age) == 0) {
//     console.log("Your age is a perfect square!");
// }

// create a number
var num = 16;
// ask the user to guess
// var guessNum = -1;
// while (guessNum != num) {
//     guessNum = prompt("Guess a number: ");
//     // check guess
//     if (guessNum == num) {
//         alert("Correct!");
//     }
//     else if (guessNum < num) {
//         alert("You guess low");
//     }
//     else {
//         alert("You guess high");
//     }
// }
do {
    var guessNum = prompt("Guess a number: ");
    // check guess
    if (guessNum < num) {
        alert("You guess low");
    }
    else if (guessNum > num) {
        alert("You guess high");
    }
} while (guessNum != num);
alert("Correct!");

