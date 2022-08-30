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
    let countingLose = 0;
    let countingWin = 0;
    let countingEqual = 0;
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
function game(playerChoice) {
    if(playerChoice==='') {
    const scoreNow = document.querySelector('.scoreNow');
    scoreNow.textContent =`Wins: ${countingWin}   Lose: ${countingLose}  Draw: ${countingEqual}`;
        return;
}  
    let Result = playRound(playerChoice,getComputerChoice());
        
        if(Result.slice(0,9).trim() === `You won!` ) {
            countingWin++;
        } else if(Result.slice(0,9).trim() === `You Lose!`) {
            countingLose++;
        } else countingEqual++;
    
    if(countingWin === 5) {
        div1.textContent = (`You won the game with ${countingWin} wins ${countingLose} lose and ${countingEqual} equals`);
    } else if(countingLose=== 5) {
        div1.textContent = (`You lose the game with ${countingWin} wins ${countingLose} lose and ${countingEqual} equals`);
    }
    console.log(Result)
} 
const div1 = document.querySelector('div.content');


const gameEvent = document.querySelector('.gameEvent');
gameEvent.addEventListener('click', () => {
    game(``);
});

const Paper = document.querySelector('.Paper');
Paper.addEventListener('click', () => {
    game(`Paper`);
});
const Scissors = document.querySelector('.Scissors');
Scissors.addEventListener('click', () => {
    game(`Scissors`);

});
const Rock = document.querySelector('.Rock');
Rock.addEventListener('click', () => {
    game(`Rock`);

});

// const gameEvent = document.querySelector('.gameEvent');
// gameEvent.addEventListener('click',game());
