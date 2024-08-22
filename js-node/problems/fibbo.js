function fibonacci(n) {
  const fibo = [0, 1, 1];
  for (let i = 3; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

(() => {
  console.log(fibonacci(20))
})()