const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const passwordInput = document.getElementById('password');

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

function generatePassword(length, useUpper, useLower, useNumbers, useSymbols) {
    let chars = "";
    if(useUpper) chars += uppercase;
    if(useLower) chars += lowercase;
    if(useNumbers) chars += numbers;
    if(useSymbols) chars += symbols;

    if(chars === "") return ""; // if no option selected

    let password = "";
    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

generateBtn.addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const useUpper = document.getElementById('uppercase').checked;
    const useLower = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    const password = generatePassword(length, useUpper, useLower, useNumbers, useSymbols);
    passwordInput.value = password ? password : "Select at least one option!";
});

copyBtn.addEventListener('click', () => {
    if(passwordInput.value) {
        passwordInput.select();
        document.execCommand('copy');
        alert("Password copied to clipboard!");
    }
});
