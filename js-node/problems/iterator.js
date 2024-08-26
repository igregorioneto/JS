(() => {
  const numbers = Array(30).fill().map((_, i) => i + 1);
  const iterator = numbers[Symbol.iterator]();
  for (const i of iterator) {
    if (i > 15) break;
    console.log(i);
  }
})()