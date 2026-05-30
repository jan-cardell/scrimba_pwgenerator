const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let output1El = document.getElementById("output1-el")
let output2El = document.getElementById("output2-el")
let copybtn1 = document.getElementById("copyBtn1")
let copyBtn2 = document.getElementById("copyBtn2")
let lengthInput = document.getElementById("lengthInput")
const numberCheckbox = document.getElementById("number");
const specialCheckbox = document.getElementById("special");

function generatePasswords() {
    let length = lengthInput.value
    if (length === ''){
        length = 13
    }
    output1El.textContent = ''
    output2El.textContent = ''

    let usedChars = characters

    if (numberCheckbox.checked) {
        usedChars = usedChars.concat(numbers)
    }

    if (specialCheckbox.checked) {
        usedChars = usedChars.concat(special)
    }

    for (let i = 0; i < length; i++){
        output1El.textContent += usedChars[Math.floor(Math.random()*usedChars.length)]
    }
    for (let i = 0; i < length; i++){
        output2El.textContent += usedChars[Math.floor(Math.random()*usedChars.length)]
    }
}

function copytoclip1() {
    text = output1El.textContent
    navigator.clipboard.writeText(text);
}

function copytoclip2() {
    text = output2El.textContent
    navigator.clipboard.writeText(text);
}

