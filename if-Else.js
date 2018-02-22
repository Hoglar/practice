"use strict"
// I need to try the conditional (Ternary) Operator

// the Ternary operator is a shorhand version of if-else statement.

// ? means "then" and : means "else"

// We got a task!

// if 25 < score

// We need a input with score and store it in an variable.
process.stdin.setEncoding("utf8");
// going to use process stdin and stdout.


process.stdout.write("Plz type in how many points you got: 0 - 30?  ");

process.stdin.on("data", (data) => {
    let score = parseInt(data);

    gradeScore(score);

});



    // the input is an integer from 0 to 30



// I am going to convert score to grades A to F
function gradeScore(score) {

    if (score <= 5) {
        process.stdout.write("F");
    }
    else if (score <= 10) {
        process.stdout.write("E");
    }
    else if (score <= 15) {
        process.stdout.write("D");
    }
    else if (score <= 20) {
        process.stdout.write("C");
    }
    else if (score <= 25) {
        process.stdout.write("B");
    }
    else {
        process.stdout.write("A");
    }
}


// Then return the grades
let grade = "A";
