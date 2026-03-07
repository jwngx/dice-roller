const myInput = document.getElementById('myInput');
const mySubmit = document.getElementById('mySubmit');
const result = document.getElementById('result');
const diceImage = document.getElementById('diceImage');

function rollDice(userInput) {
    const values = [];
    const images = [];
    for (let i = 0; i < userInput; i++) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        values.push(randomValue);
        images.push(`<img src="dice-svg/${randomValue}.svg" alt="DICE${randomValue}">`)
    }
    // result.innerHTML=`dice : ${values.join(', ')}`;
    diceImage.innerHTML=images.join('');
}
mySubmit.onclick = function (e) {
    e.preventDefault();
    const userInput = Number(myInput.value);
    rollDice(userInput);
}
