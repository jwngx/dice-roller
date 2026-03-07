const myInput = document.getElementById('myInput');
const mySubmit = document.getElementById('mySubmit');
const result = document.getElementById('result');
const diceImage = document.getElementById('diceImage');

const values = [];
const images = [];
function rollDice() {
    for (let i = 0; i < userInput; i++) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        values.push(randomValue);
        images.push(`<img src="svg/${randomValue}.svg">`)
    }
    result.textContent=`dice : ${values.join(', ')}`;
    diceImage.innerHTML=images.join('');
}
mySubmit.onclick = function (e) {
    e.preventDefault();
    userInput = myInput.value;
    rollDice();
}
