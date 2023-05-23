import { message, messageButton, messageInput, messageMy } from "./mainFunctions.js";

message('Привет...');
message('...');
message('Ты можешь мне помочь...?');
messageButton("Конечно")

document.querySelector('.card-3-Q').addEventListener('click', function(){
    document.querySelector('.card-3-Q').style.display = 'none';
    messageMy('Конечно');
    message('...');
    message('Как тебя зовут?');
    messageInput('');
})

