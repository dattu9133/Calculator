let calculation = localStorage.getItem('calculation') || '';
const currentOperand = document.querySelector('.current');
const previousOperand = document.querySelector('.previous');
let prevDecimalDigits = null;
let curDecimalDigits = null;


displayCalculation();

function updateCalculation(value) {
  if (value === '.' && currentOperand.innerHTML.includes('.'))
    return

  else if (value !== '.' && isNaN(value)) {
    if (currentOperand.innerHTML === '') {
      calculation = calculation + value;
      displayCalculation();
      localStorage.setItem('calculation', calculation);
      return
    }
    else if (previousOperand.innerHTML === '') {
      previousOperand.innerHTML = currentOperand.innerHTML + value;
      // calculation = '';
      prevDecimalDigits = previousOperand.innerHTML.split('.')[previousOperand.innerText.split('.').length - 1].length - 3 || null;
    }
    else {
      if (curDecimalDigits && prevDecimalDigits) {
        calculation = Number(Number(eval(previousOperand.innerHTML + currentOperand.innerHTML))
          .toFixed(eval(curDecimalDigits + '+' + prevDecimalDigits)));
        previousOperand.innerHTML = calculation + value;
      }
    }

    calculation = '';

  }
  else {
    calculation += value;
  }
  displayCalculation();
  curDecimalDigits = currentOperand.innerHTML.split('.')[currentOperand.innerHTML.split('.').length - 1].length || null;

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  currentOperand.innerHTML = calculation;
}

window.addEventListener("resize", () => {
  const minHeight = 480;
  if (window.innerHeight < minHeight) {
    window.innerHeight = minHeight;
  }
});