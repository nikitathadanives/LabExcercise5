// Basic Calculator
document.getElementById('calculateBtn').addEventListener('click', () => {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const operation = document.getElementById('operation').value;

  try {
      const parsedNum1 = parseFloat(num1);
      const parsedNum2 = parseFloat(num2);

      if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
          throw new Error('Invalid input: please enter valid numbers.');
      }

      let result;
      switch (operation) {
          case 'add':
              result = parsedNum1 + parsedNum2;
              break;
          case 'subtract':
              result = parsedNum1 - parsedNum2;
              break;
          case 'multiply':
              result = parsedNum1 * parsedNum2;
              break;
          case 'divide':
              if (parsedNum2 === 0) {
                  throw new Error('Division by zero is not allowed.');
              }
              result = parsedNum1 / parsedNum2;
              break;
          default:
              throw new Error('Invalid operation.');
      }
      
      document.getElementById('result').textContent = `Result: ${result}`;
  } catch (error) {
      document.getElementById('result').textContent = `Error: ${error.message}`;
  }
});

// Generate Squares
document.getElementById('generateSquaresBtn').addEventListener('click', () => {
  const numbers = document.getElementById('numberArray').value.split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num));

  const squaresList = document.getElementById('squaresList');
  squaresList.innerHTML = '';

  if (numbers.length === 0) {
      squaresList.innerHTML = 'Please enter valid numbers.';
      return;
  }

  numbers.forEach(num => {
      const li = document.createElement('li');
      li.textContent = `${num} squared = ${num ** 2}`;
      squaresList.appendChild(li);
  });
});

// Generate Primes
document.getElementById('generatePrimesBtn').addEventListener('click', () => {
  const limit = parseInt(document.getElementById('primeLimit').value, 10);
  const primesList = document.getElementById('primesList');
  primesList.innerHTML = '';

  if (isNaN(limit) || limit <= 1) {
      primesList.innerHTML = 'Please enter a valid limit greater than 1.';
      return;
  }

  const primes = [...generatePrimes(limit)];

  if (primes.length === 0) {
      primesList.innerHTML = 'No primes found in the given range.';
      return;
  }

  primes.forEach(prime => {
      const li = document.createElement('li');
      li.textContent = prime;
      primesList.appendChild(li);
  });
});

// Generator Function for Primes
function* generatePrimes(limit) {
  function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
      }
      return true;
  }

  for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
          yield num;
      }
  }
}
