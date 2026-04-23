const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContsinerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    copyPassword();
    if(inputEl.value) {
        alertContsinerEl.classList.remove("active");
        setTimeout(() => {
            alertContsinerEl.classList.add("active");
        }, 1750);
    }
});

function createPassword() {
    const chars =
        "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890~`!@#$%^&*()_+-[]\{}|;':/><,.";
    const passwordLength = 12;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        let randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputEl.value = password;
    alertContsinerEl.innerText = password + " copied!";
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 999);
    navigator.clipboard.writeText(inputEl.value);
}