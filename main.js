function onSubmit() {
    let usernameErrorLabel = document.getElementById("username_error");
    let namesErrorLabel = document.getElementById("names_error");
    let emailErrorLabel = document.getElementById("email_error");

    let username = document.getElementById("username").value;
    if (!username || username.length < 3 || username.length > 10) {
        usernameErrorLabel.textContent = "Потребителското име трябва да е между 3 и 10 символа!";
        document.getElementById("username").focus();
        return;
    } else {
        usernameErrorLabel.textContent = "";
    }

    let names = document.getElementById("names").value;
    if (!names || names.length > 50) {
        namesErrorLabel.textContent = "Имената трябва да са до 50 символа!";
        document.getElementById("names").focus();
        return
    } else {
        namesErrorLabel.textContent = "";
    }

    let email = document.getElementById("email").value;
    if (!email || !email.match(document.getElementById("email").pattern)) {
        emailErrorLabel.textContent = "Въведете валиден имейл!";
        document.getElementById("email").focus();
        return;
    } else {
        emailErrorLabel.textContent = "";
    }
}

(function () {
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", onSubmit);
})()
