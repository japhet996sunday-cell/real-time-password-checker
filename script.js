let password = document.getElementById("password");

password.addEventListener("input", function () {
    let passInput = password.value;

    // LENGTH CHECK
    if (passInput.length >= 8) {
        document.getElementById("lengthError").classList.add("right");
        document.getElementById("lengthError").classList.remove("wrong");
    } else {
        document.getElementById("lengthError").classList.add("wrong");
        document.getElementById("lengthError").classList.remove("right");
    }

    // NUMBER CHECK
    if (/\d/.test(passInput)) {
        document.getElementById("numberError").classList.add("right");
        document.getElementById("numberError").classList.remove("wrong");
    } else {
        document.getElementById("numberError").classList.add("wrong");
        document.getElementById("numberError").classList.remove("right");
    }

    // SPECIAL CHARACTER CHECK
    if (/[!@#$%^&*(),.?":{}|<>]/.test(passInput)) {
        document.getElementById("charError").classList.add("right");
        document.getElementById("charError").classList.remove("wrong");
    } else {
        document.getElementById("charError").classList.add("wrong");
        document.getElementById("charError").classList.remove("right");
    }
});
