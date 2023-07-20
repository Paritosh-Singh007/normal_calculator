let input = '';

function appendNumber(number) {
    input += number;
    document.getElementById('result').value = input;
}

function appendOperator(operator) {
    input += operator;
    document.getElementById('result').value = input;
}

function calculate() {
    try {
        const result = eval(input);
        document.getElementById('result').value = result;
        input = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        input = '';
    }
}

function clearInput() {
    input = '';
    document.getElementById('result').value = '';
}
