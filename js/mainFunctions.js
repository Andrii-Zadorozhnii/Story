

let numberOfMessages = 0;
let buttonNumber = 0;
var parentElement = document.querySelector(".main-section");

export function message(text) {
    let message = document.createElement("div");
    let messageText = document.createElement("p");
    message.classList.add(`main-section__card`);
    message.classList.add(`card-${numberOfMessages}`);
    ++numberOfMessages;
    messageText.innerHTML = text;
    message.appendChild(messageText);
    parentElement.appendChild(message);

    const cards = document.querySelectorAll('.main-section__card');
    const sound = new Audio('.././media/msg-audio.mp3') // Replace with the path to your sound file

    // Function to play the sound effect
    function playSound() {
        sound.play();
    }

    // Function to apply animation delays to cards and play the sound
    function animateCards() {
        cards.forEach((card, index) => {
            card.style.animation = `show-card 1s ${index * 2.5}s ease forwards`;
        });
        playSound();
    }

    animateCards();
}


export function messageMy(text) {
    let message = document.createElement("div");
    let messageText = document.createElement("p");
    message.classList.add(`main-section__card-my`);
    message.classList.add(`card-${numberOfMessages}`);
    ++numberOfMessages;
    messageText.innerHTML = text;
    message.appendChild(messageText);
    parentElement.appendChild(message);

    const cards = document.querySelectorAll('.main-section__card');

    // Function to apply animation delays to cards
    function animateCards() {
        cards.forEach((card, index) => {
            card.style.animation = `show-card 1s ${index * 3}s ease forwards`;
        });
    }

    animateCards();
}

export function messageButton(text) {
    let message = document.createElement("div");
    let messageText = document.createElement("p");
    message.classList.add(`main-section__card`);
    message.classList.add(`question`);
    message.classList.add(`card-${numberOfMessages}-Q`);
    ++numberOfMessages;
    messageText.innerHTML = text;
    message.appendChild(messageText);
    parentElement.appendChild(message);

    const cards = document.querySelectorAll('.main-section__card');

    // Function to apply animation delays to cards
    function animateCards() {
        cards.forEach((card, index) => {
            card.style.animation = `show-card 1s ${index * 3}s ease forwards`;
        });
    }

    animateCards();
}

export function messageInput(text) {
    let message = document.createElement("div");
    let messageText = document.createElement("input");
    message.classList.add(`main-section__card`);
    message.classList.add(`question`);
    message.classList.add(`card-${numberOfMessages}-Q`);
    ++numberOfMessages;
    messageText.type = "text"; // Set the input type to "text"
    messageText.value = text; // Set the initial value of the input
    message.appendChild(messageText);
    parentElement.appendChild(message);

    const cards = document.querySelectorAll('.main-section__card');

    // Function to apply animation delays to cards
    function animateCards() {
        cards.forEach((card, index) => {
            card.style.animation = `show-card 1s ${index * 3}s ease forwards`;
        });
    }

    animateCards();
}