let form = document.querySelector("#register-form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#confirm-password");\
let terms = document.querySelector("#terms");
let result = document.querySelector("#result");

function showError(input, errorId, message) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    input.setAttribute("aria-invalid", "true");
    document.querySelector(errorId).textContent = message;
    return false;
}
function showSuccess(input, errorId) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    input.setAttribute("aria-invalid", "true");
    document.querySelector(errorId).textContent = '';
    return false;

}
function validateName(){
    if(username.value.trim.length <2){
        return showError(username, '#username-error', "Enter min 2");
    }
    return showSuccess(username);
}
function validateEmail(){
    if(email.value.trim() === ""){
        return showError(email, '#email-error', "Enter email");
    }
    return showSuccess(email);
}
function validatePassword(){
    if(password.value.trim() === "" || password.value.trim().length < 8){
        return showError(password, '#password-error', "Enter min 8");
    }
    return showSuccess(password);
}
function validateConfirmPassword(){
    if(passwordConfirm.value.trim() === "" || passwordConfirm.value !== password.value){
        return showError(passwordConfirm, '#confirm-error', "Not the same");
    }
    return showSuccess(passwordConfirm);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    result.textContent = "";
})
