let copyBtn = document.getElementById("message__button-copy");

let showEncryptOrDecryptText = document.getElementById("message__encrypted-or-decrypted");
let DivMessageWithImage = document.getElementById("message__division");
let messageDiv = document.getElementById("message");
let infoDiv = document.getElementById("information");
let divCopyMessageConfirm = document.getElementById("copy-message-confirm");
let textArea = document.getElementById("encrypt__input");

let textAreaValue;
let newMessage;
let copyMessage;


textArea.addEventListener('input', function(event) {
    let inputText = event.target.value;
    event.target.value = inputText.replace(/[^a-z0-9\s]/g, '');
});


function closeInfo() {
    infoDiv.style.display = 'none';
}


function autoResizeTextarea() {
    while (textArea.scrollHeight > textArea.offsetHeight) {
        textArea.rows += 1;
    }
}


function hideMessageCopy() {
    divCopyMessageConfirm.style.display = 'none';
}


async function copyText() {
    copyMessage = showEncryptOrDecryptText.innerText;

    await navigator.clipboard.writeText(copyMessage);

    divCopyMessageConfirm.style.display = 'block';

    setTimeout(hideMessageCopy, 1400);
}


function hideSomeElements() {
    DivMessageWithImage.style.display = 'none';
    showEncryptOrDecryptText.style.display = 'block';
    messageDiv.style.justifyContent = 'space-between';
    messageDiv.style.height = 'auto';
    copyBtn.style.display = 'block';

    showEncryptOrDecryptText.innerHTML = '';
    showEncryptOrDecryptText.innerHTML = newMessage;
}


function encryptMessage() {
    textAreaValue = document.getElementById("encrypt__input").value;

    const encryptMsg = {
        "e": 'enter',
        "i": 'imes',
        "a": 'ai',
        "o": 'ober',
        "u": 'ufat'
    };

    newMessage = "";
    
    for (let char of textAreaValue) {
        newMessage += encryptMsg[char] || char;
    }

    hideSomeElements();
}


function decryptMessage() {
    textAreaValue = document.getElementById("encrypt__input").value;
    
    newMessage = textAreaValue.replace(/enter/g, "e");
    newMessage = newMessage.replace(/imes/g, "i");
    newMessage = newMessage.replace(/ai/g, "a");
    newMessage = newMessage.replace(/ober/g, "o");
    newMessage = newMessage.replace(/ufat/g, "u");

    hideSomeElements();
}
