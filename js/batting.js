
totalScore = 0;
score=0;
computerChoice = 0;
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");

const playerScore = document.querySelector(".scorecard p");
console.log(playerScore.textContent);

function result() {
    if (computerChoice == score) {
        alert("Game Ends");
        totalScore = totalScore-score;
        playerScore.textContent = totalScore;
        one.disabled = true;
        two.disabled = true;
        three.disabled = true;
        four.disabled = true;
        five.disabled = true;
        six.disabled = true;

        localStorage.setItem("Target",totalScore);
    }

}

one.addEventListener('click', () => {
    score = 1;
    totalScore += score;
    console.log(totalScore);
    playerScore.textContent = totalScore;
    computerChoice = Math.floor(Math.random() * 6) + 1;
    console.log(computerChoice);
    result();


})

two.addEventListener('click', () => {
    score = 2;
    totalScore += score;
    playerScore.textContent = totalScore;
    computerChoice = Math.floor(Math.random() * 6) + 1;
    console.log(computerChoice);
    result();

})
three.addEventListener('click', () => {
    score = 3;
    totalScore += score;
    playerScore.textContent = totalScore;
    computerChoice = Math.floor(Math.random() * 6) + 1;
    console.log(computerChoice);
    result();

})
four.addEventListener('click', () => {
    score = 4;
    totalScore += score;
    playerScore.textContent = totalScore;
    computerChoice = Math.floor(Math.random() * 6) + 1;
    console.log(computerChoice);
    result();

})
five.addEventListener('click', () => {
    score = 5;
    totalScore += score;
    playerScore.textContent = totalScore;
    computerChoice = Math.floor(Math.random() * 6) + 1;
    console.log(computerChoice);
    result();

})
six.addEventListener('click', () => {
    score = 6;
    totalScore += score;
    playerScore.textContent = totalScore;
    computerChoice = Math.floor(Math.random() * 6) + 1;
    console.log(computerChoice);
    result();

})