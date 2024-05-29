
let calculation = localStorage.getItem('calculation') || '';
const currentOperand = document.querySelector('.current');
const previousOperand = document.querySelector('.previous');
let prevDecimalDigits = null;
let curDecimalDigits = null;

displayCalculation();

document.body.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!isNaN(key) || key === '.') {
    updateCalculation(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    updateCalculation(` ${key} `);
  } else if (key === 'Enter' || key === '=') {
    calculateResult();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearCalculation();
  }
});

function updateCalculation(value) {
  if (value === '.' && currentOperand.innerHTML.includes('.')) return;

  if (!isNaN(value) || value === '.') {
    calculation += value;
  } else {
    if (previousOperand.innerHTML === '') {
      previousOperand.innerHTML = currentOperand.innerHTML + value;
      prevDecimalDigits = getDecimalDigits(previousOperand.innerHTML);
    } else {
      if (curDecimalDigits && prevDecimalDigits) {
        let result = eval(previousOperand.innerHTML + currentOperand.innerHTML);
        result = Number(result.toFixed(curDecimalDigits + prevDecimalDigits));
        previousOperand.innerHTML = result + value;
      }
    }
    calculation = '';
  }
  displayCalculation();
  curDecimalDigits = getDecimalDigits(currentOperand.innerHTML);
  localStorage.setItem('calculation', calculation);
}

function getDecimalDigits(number) {
  const parts = number.split('.');
  return parts.length > 1 ? parts[1].length : 0;
}

function displayCalculation() {
  currentOperand.innerHTML = calculation;
}

function calculateResult() {
  if (previousOperand.innerHTML && calculation) {
    let result = eval(previousOperand.innerHTML + calculation);
    if (curDecimalDigits && prevDecimalDigits) {
      result = Number(result.toFixed(curDecimalDigits + prevDecimalDigits));
      if (Number(result.toString().split('.').pop()) === 0) {
        result = Math.floor(result);
      }
    }
    calculation = result.toString();
    previousOperand.innerHTML = '';
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  }
}

function clearCalculation() {
  calculation = '';
  previousOperand.innerHTML = '';
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function deleteLast() {
  calculation = calculation.slice(0, -1);
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}
