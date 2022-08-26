/*Your game is going to play against the computer,
so begin with a function called getComputerChoice
that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
We’ll use this function in the game to make the computer’s play.
Tip: use the console to make sure this is returning the expected
output before moving to the next step!*/
function getComputerChoice() {
    const TheChoice = Math.floor(Math.random()*100)+1;
    if(TheChoice <= 33) {
        return 'Rock';
    } else if(TheChoice >= 33 && TheChoice <= 66) {
        return `Paper`;
    } else return `Scissors`;
}
