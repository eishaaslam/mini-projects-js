const button = document.getElementById("button");
const textBox = document.getElementById("textBox");
const result = document.getElementById("result");

button.onclick = function() {
    let text = textBox.value;
    let totalCharacters = text.length;
    
    result.innerText = "Your script has " + totalCharacters + " characters! 😊";
};