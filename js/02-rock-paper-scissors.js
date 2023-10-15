// User makes a choice. How will we collect the user’s choice?
// Computer makes a choice. How will we collect the computer’s choice?
// A conditional that determines who wins.

// Begin by prompting the user for their choice.

function getUsersChoice() {
    let userChoice;

    // // What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
    while (true) {
        userChoice = prompt("Rock, paper or scissors?")
        if (userChoice == "Rock" || userChoice == "Paper" || userChoice == "Scissors") {
            break
        }
    }
    return userChoice
}


// Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
//Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
function getCompChoice() {
    let computerChoice = Math.round(Math.random() * 2 ) // generates between 0,1 and 2

    if (computerChoice == 0) {
        computerChoice = "Rock"
    } else if (computerChoice == 1) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }    
    return computerChoice
}

//console.log("cChoice" + cChoice)


// Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
function findWinner(useChoice, compChoice) {
    // What if the result ends in a tie? Figure out how to handle that as well.
    //console.log(`user choice ${useChoice} compChoice ${compChoice}`)
    
    if (useChoice == compChoice) {
        alert("It's a draw!")
    } else {
        // user picks paper
        if (useChoice == "Paper") {
            (compChoice == "Rock") ? alert("User Wins!") : alert("Computer Wins!")

        } else if (useChoice == "Rock") {
            (compChoice == "Scissors") ? alert("User Wins!") : alert("Computer Wins!")

        // user picks scissors   
        } else {
            (compChoice == "Paper") ? alert("User Wins!") : alert("Computer Wins!")
        } 
    }

}


function playRockPaperScissors() {
    // User makes a choice. How will we collect the user’s choice?
    uChoice = getUsersChoice()

    // Computer makes a choice. How will we collect the computer’s choice?
    cChoice = getCompChoice()

   // A conditional that determines who wins.
    findWinner(uChoice, cChoice)

}

playRockPaperScissors()