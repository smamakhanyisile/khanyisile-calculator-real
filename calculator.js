function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
  }
  
  // Move the calculator
  window.onload = function() {
    var calculator = document.getElementById('calculator');
    calculator.classList.add('moving');
  };