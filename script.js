// script.js
const pass = document.getElementById("PassWord");
const len = 12;

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_+-=";
const allchar = upper + lower + number + symbol;

function generate() {
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (len > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    pass.value = password; // Update input field value with generated password
}
function copy(){
    pass.select();
    document.execCommand("copy");
}