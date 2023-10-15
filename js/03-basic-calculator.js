// ADD A FUNCTION CALLED CALCULATE
function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
        case "add":
            result = num1 + num2
            break;
        case "subtract":
            result = num1 - num2
            break;
        case "multiply":
            result = num1 * num2
            break;
        case "divide":
            result = num1 / num2
            break;
    }
   
    return alert(`Result: ${result}`);

}



// COLLECT FIRST NUMBER FROM USER
let firstNum = parseInt(prompt("Enter one number:"))

// COLLECT SECOND NUMBER FROM USER
let secondNum = parseInt(prompt("Enter second number"))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
function enterOperator() {
    let userOper;
    do {
        userOper = prompt("Enter the operation")
        
        if (userOper != "add" && userOper != "subtract" && userOper != "multiply" && userOper != "divide") {
            alert("Please enter an operation that is valid")
        }

    } while (userOper != "add" && userOper != "subtract" && userOper != "multiply" && userOper != "divide") // if it isnt "and" will keep going
    //break;
    return userOper
}

let uOper = enterOperator()

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
calculate(firstNum, secondNum, uOper)

// Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, 
// they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for 
// the numbers and operation once more. You’ll have to add this functionality within a do while loop similarly how the labs were done in the previous lecture.
