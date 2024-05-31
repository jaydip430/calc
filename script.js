function calculateResult() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parse
Float(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);

    const operation1 = document.getElementById('operation1').value;
    const operation2 = document.getElementById('operation2').value;

    let intermediateResult;
    switch(operation1) {
        case 'add':
            intermediateResult = num1 + num2;
            break;
        case 'subtract':
            intermediateResult = num1 - num2;
            break;
        case 'multiply':
            intermediateResult = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                intermediateResult = num1 / num2;
            } else {
                document.getElementById('result').textContent = "Error! Division by zero.";
                return;
            }
            break;
        default:
            document.getElementById('result').textContent = "Error! Invalid operation.";
            return;
    }

    let finalResult;
    switch(operation2) {
        case 'add':
            finalResult = intermediateResult + num3 + num4;
            break;
        case 'subtract':
            finalResult = intermediateResult - num3 - num4;
            break;
        case 'multiply':
            finalResult = intermediateResult * num3 * num4;
            break;
        case 'divide':
            if (num3 !== 0 && num4 !== 0) {
                finalResult = intermediateResult / num3 / num4;
            } else {
                document.getElementById('result').textContent = "Error! Division by zero.";
                return;
            }
            break;
        default:
            document.getElementById('result').textContent = "Error! Invalid operation.";
            return;
    }

    document.getElementById('result').textContent = `Result: ${finalResult}`;
}
