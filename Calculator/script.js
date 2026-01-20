// Calculate button click
document.getElementById("calculateBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');

    // Reset result styling
    resultDiv.className = 'result';

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerText = "⚠️ Please enter valid numbers.";
        resultDiv.style.background = "#f8d7da"; // red background for error
        resultDiv.style.color = "#721c24";      // dark red text
        return;
    }

    let result;
    switch(operation) {
        case "add": result = num1 + num2; break;
        case "subtract": result = num1 - num2; break;
        case "multiply": result = num1 * num2; break;
        case "divide":
            if (num2 === 0) {
                resultDiv.innerText = "⚠️ Division by zero!";
                resultDiv.style.background = "#f8d7da";
                resultDiv.style.color = "#721c24";
                return;
            }
            result = num1 / num2; break;
        default:
            resultDiv.innerText = "⚠️ Select an operation!";
            resultDiv.style.background = "#fff3cd"; // yellow background for warning
            resultDiv.style.color = "#856404";      // dark yellow text
            return;
    }

    // Show result
    resultDiv.innerText = `✅ Result: ${result}`;
    resultDiv.style.background = "#e9f7ef"; // green background
    resultDiv.style.color = "#155724";      // green text
});

// Highlight result box on click
const resultDiv = document.getElementById('result');
resultDiv.addEventListener('click', () => {
    resultDiv.classList.toggle('highlight');
});
