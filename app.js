/*Your game is going to play against the computer,
so begin with a function called getComputerChoice
that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
We’ll use this function in the game to make the computer’s play.
Tip: use the console to make sure this is returning the expected
output before moving to the next step!*/
function getComputerChoice() {
    const TheChoice = Math.random()*100+1;
    if(TheChoice <= 33) {
        return 'Rock';
    } else if(TheChoice >= 33 && TheChoice <= 66) {
        return `Paper`;
    } else return `Scissors`;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if(playerSelection === computerSelection) {
        return `Equal! The choice is same`;
    } else if(playerSelection === `Rock` && computerSelection === `Scissors`) {
        return `You won!  ${playerSelection} beat ${computerSelection}`;
    } else if(playerSelection === `Scissors` && computerSelection === `Rock`) {
        return `You Lose! ${computerSelection} beat ${playerSelection}`;
    } else if(playerSelection === `Paper` && computerSelection === `Rock`) {
        return `You won!  ${playerSelection} beat ${computerSelection}`;
    } else if(playerSelection === `Rock` && computerSelection === `Paper`) {
        return `You Lose! ${computerSelection} beat ${playerSelection}`;
    } else if(playerSelection === `Scissors` && computerSelection === `Paper`) {
        return `You won!  ${playerSelection} beat ${computerSelection}`;
    } else if(playerSelection == `Paper` && computerSelection === `Scissors`) {
        return `You Lose! ${computerSelection} beat ${playerSelection}`;
    }
}
function game() {
    let countingLose = 0;
    let countingWin = 0;
    let countingEqual = 0;
    for(let i = 1; i<=5;i++ )
    {
        let playerChoice = prompt('Your choice is','');
        let Result = playRound(playerChoice,getComputerChoice());
        console.log(Result);
        if(Result.slice(0,9).trim() === `You won!` ) {
            countingWin++;
        } else if(Result.slice(0,9).trim() === `You Lose!`) {
            countingLose++;
        } else countingEqual++;
    }
    if(countingWin > countingLose) {
        alert(`You won the game with ${countingWin} wins ${countingLose} lose and ${countingEqual} equals`);
    } else if(countingWin < countingLose) {
        alert(`You lose the game with ${countingWin} wins ${countingLose} lose and ${countingEqual} equals`);
    } else alert(`Draw! ${countingWin} wins ${countingLose} lose and ${countingEqual} equals`);
    
}