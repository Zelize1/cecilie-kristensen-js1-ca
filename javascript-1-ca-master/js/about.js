const changeText = document.querySelector("h1", ".about");

const formattedText = text.replace("the", "replaced").replace("The", "Replaced");

changeText.innerText = formattedText;

const timeoutContainer = document.querySelector("h1", ".about");

function updateText() {
    timeoutContainer.innerHTML = formattedText
}

setTimeout(updateText, 4000);