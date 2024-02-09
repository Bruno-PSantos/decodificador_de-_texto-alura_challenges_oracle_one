let encryptBtn = document.getElementsByClassName("encrypt__bottom__buttons__encrypt");
let decryptBtn = document.getElementsByClassName("encrypt__bottom__buttons__decrypt");
let copyBtn = document.getElementById("message__button-copy");

let showEncryptOrDecryptText = document.getElementById("message__encrypted-or-decrypted");
let DivMessageWithImage = document.getElementById("message__division");
let messageDiv = document.getElementById("message");

let textAreaValue;
let newMessage;
let newSplitMessage = [];
let copyMessage;


function autoResizeTextarea() {
    let textArea = document.getElementById("encrypt__input");
    
    while (textArea.scrollHeight > textArea.offsetHeight) {
        textArea.rows += 1;
    }
}


async function copyText() {
    copyMessage = showEncryptOrDecryptText.innerText;

    await navigator.clipboard.writeText(copyMessage);
}


function encryptMessage() {
    textAreaValue = document.getElementById("encrypt__input").value;
    let splitMessage = textAreaValue.split("");

    for (let i = 0; i < splitMessage.length; i++) {
        switch(splitMessage[i]) {
            case "e":
                newSplitMessage[i] = 'enter';
                break;
            case "i":
                newSplitMessage[i] = 'imes';
                break;
            case "a":
                newSplitMessage[i] = 'ai';
                break;
            case "o":
                newSplitMessage[i] = 'ober';
                break;
            case "u":
                newSplitMessage[i] = 'ufat';
                break;
            default:
                newSplitMessage[i] = splitMessage[i]
                break;
        }
    }

    DivMessageWithImage.style.display = 'none';
    showEncryptOrDecryptText.style.display = 'block';
    messageDiv.style.justifyContent = 'space-between';
    messageDiv.style.height = 'auto';
    copyBtn.style.display = 'block';

    newMessage = newSplitMessage.join("");
    showEncryptOrDecryptText.innerHTML = newMessage;
}


function decryptMessage() {
    textAreaValue = document.getElementById("encrypt__input").value;
    
    newMessage = textAreaValue.replace(/enter/g, "e");
    newMessage = newMessage.replace(/imes/g, "i");
    newMessage = newMessage.replace(/ai/g, "a");
    newMessage = newMessage.replace(/ober/g, "o");
    newMessage = newMessage.replace(/ufat/g, "u");

    DivMessageWithImage.style.display = 'none';
    showEncryptOrDecryptText.style.display = 'block';
    messageDiv.style.justifyContent = 'space-between';
    messageDiv.style.height = 'auto';
    copyBtn.style.display = 'block';

    showEncryptOrDecryptText.innerHTML = newMessage;
}