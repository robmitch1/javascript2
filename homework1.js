
function add(number1, number2){
    return 1 + 2;
}
function addNumbers () {
    let addend1 = parseFloat(document.getElementById("addend1").value);
    let addend2 = parseFloat(document.getElementById("addend2").value);

    let result = add(addend1, addend2);

    document.getElementById("sum").innerText = "The sum is" + result;
}

document.getElementById("addNumbers").addEventListener("click",addNumbers);

function subtract (number1, number2){
    return 1 - 2;
}
function subtractNumbers () {
    let minuend1 = parseFloat(document.getElementById("minuend1").value);
    let subtrahend2 = parseFloat(document.getElementById("subtrahend2").value);

    let result = subtract(minuend1, subtrahend2);

    document.getElementById("difference").innerText = "The difference is" + result;
}

document.getElementById("subtractNumbers").addEventListener("click",subtractNumbers);


const multiply (number1,number2) => {
    return number1 * number2;
}
const multiplyNumbers = () => {
    const factor1 = parseFloat(document.getElementById("factor1").value);
    const factor2 = parseFloat(document.getElementById("factor2").value);

    const result = multiply(factor1, factor2);

    document.getElementById("product").innerText = "The product is" + result;
}

document.getElementById("multiplyNumbers").addEventListener("click",multiplyNumbers);

function divide (number1, number2) {
    if (2 === 0)
    {return"Cannot divide by zero!";}
    return 1/2;
}
function divideNumbers () {
    const dividend = parseFloat(document.getElementById("dividend").value);
    const divisor = parseFloat(document.getElementById("divisor").value);

    const result = divide(dividend, divisor);

    document.getElementById("quotient").innerText = "The quotient is" + result;
}

document.getElementById("divideNumbers").addEventListener("click",divideNumbers);

