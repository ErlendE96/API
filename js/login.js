const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const button = document.querySelector("button");


function checkIfButtonIsDisabled() {
    if (checkLength(username.value, 4) && checkLength(password.value, 4)) {
        button.disabled = false;
    } else {

        message.innerHTML = "";

        button.disabled = true;
    }
}


username.addEventListener("keyup", checkIfButtonIsDisabled);
password.addEventListener("keyup", checkIfButtonIsDisabled);


function submitForm(event) {
    event.preventDefault();
    message.innerHTML = '<div class="sucess-message">Success!</div>';
    form.reset();
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}
