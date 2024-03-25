function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function sommeNombresPremiers(num1, num2) {
  if (isPrime(num1) && isPrime(num2)) return num1 + num2;
  else return false;
}

console.log(sommeNombresPremiers(2, 2));
