const DICE_SVG = {
    1: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="92" height="92" rx="18" fill="#2a2724" stroke="#e8c87a" stroke-width="2.5"/>
    <circle cx="50" cy="50" r="8" fill="#e8c87a"/>
  </svg>`,

    2: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="92" height="92" rx="18" fill="#2a2724" stroke="#e8c87a" stroke-width="2.5"/>
    <circle cx="30" cy="30" r="8" fill="#e8c87a"/>
    <circle cx="70" cy="70" r="8" fill="#e8c87a"/>
  </svg>`,

    3: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="92" height="92" rx="18" fill="#2a2724" stroke="#e8c87a" stroke-width="2.5"/>
    <circle cx="30" cy="30" r="8" fill="#e8c87a"/>
    <circle cx="50" cy="50" r="8" fill="#e8c87a"/>
    <circle cx="70" cy="70" r="8" fill="#e8c87a"/>
  </svg>`,

    4: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="92" height="92" rx="18" fill="#2a2724" stroke="#e8c87a" stroke-width="2.5"/>
    <circle cx="30" cy="30" r="8" fill="#e8c87a"/>
    <circle cx="70" cy="30" r="8" fill="#e8c87a"/>
    <circle cx="30" cy="70" r="8" fill="#e8c87a"/>
    <circle cx="70" cy="70" r="8" fill="#e8c87a"/>
  </svg>`,

    5: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="92" height="92" rx="18" fill="#2a2724" stroke="#e8c87a" stroke-width="2.5"/>
    <circle cx="30" cy="30" r="8" fill="#e8c87a"/>
    <circle cx="70" cy="30" r="8" fill="#e8c87a"/>
    <circle cx="50" cy="50" r="8" fill="#e8c87a"/>
    <circle cx="30" cy="70" r="8" fill="#e8c87a"/>
    <circle cx="70" cy="70" r="8" fill="#e8c87a"/>
  </svg>`,

    6: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="92" height="92" rx="18" fill="#2a2724" stroke="#e8c87a" stroke-width="2.5"/>
    <circle cx="30" cy="25" r="8" fill="#e8c87a"/>
    <circle cx="70" cy="25" r="8" fill="#e8c87a"/>
    <circle cx="30" cy="50" r="8" fill="#e8c87a"/>
    <circle cx="70" cy="50" r="8" fill="#e8c87a"/>
    <circle cx="30" cy="75" r="8" fill="#e8c87a"/>
    <circle cx="70" cy="75" r="8" fill="#e8c87a"/>
  </svg>`,
};

const myInput = document.getElementById('myInput');
const mySubmit = document.getElementById('mySubmit');
const result = document.getElementById('result');
const diceImage = document.getElementById('diceImage');

function rollDice(userInput) {
    const values = [];
    for (let i = 0; i < userInput; i++) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        values.push(randomValue);
        html.push(`<div class="die-wrap" style="animation-delay:${i * 0.07}s">${DICE_SVG[randomValue]}</div>`);
    }
    diceImage.innerHTML = html.join('');
}

mySubmit.onclick = function (e) {
    e.preventDefault();
    const userInput = Number(myInput.value);
    rollDice(userInput);
}
