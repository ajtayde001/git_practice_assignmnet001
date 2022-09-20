function checkPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(num, "is prime number");
  } else {
    console.log(num, "is not prime number");
  }
}
checkPrime(29);
