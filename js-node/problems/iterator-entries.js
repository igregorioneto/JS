(() => {
  const numbers = Array(30).fill().map((_, i) => i + 1);
  const iterator = numbers[Symbol.iterator]();
  const aEntries = numbers.entries();
  for (const element of aEntries) {
    console.log(element)
  }
  const aValues = numbers.values();
  for (const element of aValues) {
    console.log(element)
  }
})()