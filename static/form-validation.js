const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const result = document.getElementById("result");



form.addEventListener("submit", function (event) {
    event.preventDefault();
    result.innerHTML = ""

    if (validateForm()) {
        result.innerHTML = "Form is valid!";
        result.className = "ok";
    }else{
        result.innerHTML = "Form is not valid";
        result.className = "error";
    }
})

function showError(el, message) {
    el.textContent = message;
}

function clearError(el) {
    el.textContent = "";
}

function validateForm(){
    let nameOk = validateName();
    let emailOk = validateEmail();
    let passwordOk = validatePassword();
    let confirmOk = validateConfirm();
    return nameOk && emailOk && passwordOk && confirmOk
}

function validateName() {
    let value = nameInput.value.trim();
    if (value.length < 2) {
        showError(nameError, "name must be at least 2 characters")
        return false;
    }
    clearError(nameError)
    return true;
}

function validateEmail(){
    let value = emailInput.value.trim();
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
        showError(emailError, "Enter a valid email address");
        return false;
    }
    clearError(emailError);
    return true;
}
function validatePassword() {
    let value = passwordInput.value;
    if (value.length < 8) {
        showError(passwordError, "password must be at least 8 characters")
        return false;
    }
    clearError(passwordError);
    return true;
}
function validateConfirm(){
    let password = passwordInput.value;
    let confirm = confirmInput.value;
    if (confirm === ""){
        showError(confirmError, "Must confirm your password")
        return false
    }
    if (confirm !== password) {
        showError(confirmError, "Passwords do not match");
        return false;
    }
    clearError(confirmError)
    return true;
}
