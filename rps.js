const getUserChoice = userInput => {
    userInput=userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    }else
        console.log("Wrong choice");
}

//console.log(getUserChoice("Rock"));


function getComputerChoice(){
    random = Math.floor(Math.random() * 3);

    switch (random){
        case 0 : return 'rock';
        case 1 : return 'paper';
        case 2 : return 'scissors'
    }

}

//console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return "Tie"
    } else if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return "Computer Won!";
        }else
            return "You Won!";
    } else if (userChoice === "paper"){
        if (computerChoice === "scissors"){
            return "Computer Won!";
        }else
            return "You Won!";
    } else if (userChoice === "scissors"){
        if (computerChoice === "rock"){
            return "Computer Won!";
        }else  
            return "You Won!";
    }
}

function playGame(){
    userChoice = getUserChoice("rock");
    computerChoice = getComputerChoice()
    console.log("You picked " + userChoice);
    console.log("The computer picked " + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
}

playGame();