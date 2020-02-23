const firstName = document.querySelector("#firstName");

firstName.addEventListener("keyup", checkLength);

function checkLength(event) {
    const inputValue = event.target.value; 
    const valueLength = inputValue.length;

    if(valueLength > 0) {
        console.log("This input has a value");
    }
    else {
        console.log("This input has no values");
    }
}

const lastName = document.querySelector("#lastName");

lastName.addEventListener("keyup", checkLength);

function checkLength(event) {
    const inputValue = event.target.value;
    const valueLength = inputValue.length;

    if(valueLength > 0) {
        console.log("This input has a value");
    }
    else {
        console.log("This input has no values");
    }
}

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const emailValue = email.value;

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.text(email);
    return patternMatches;
}

if (checkInputLength(emailValue)){
    emailError.style.display = "none";
} else {
    emailError.style.display = "block";
}

const message = document.querySelector("#message");

message.addEventListener("keyup", checkLength);

function checkLength(event) {
    const inputValue = event.target.value;
    const valueLength = inputValue.length;

    if(valueLength >= 10) {
        console.log("This input has a value of at least 10");
    }
    else {
        console.log("This input does not have a value of at least 10");
    }
}

const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("The form has been submitted");

}