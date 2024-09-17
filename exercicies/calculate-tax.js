function calculateTotal(price, tax) {
  const total = price + (price * tax);
  return total.toFixed(2);
}

const calculateTotalTax = 
 (price, tax = 0.15) => (price * (1 + tax)).toFixed(2);

(() => {
  console.log(calculateTotal(100, 0.15));
  console.log(calculateTotal(200, 0.15));
  console.log(calculateTotal(300, 0.15));

  [100, 200, 300].forEach(price => console.log(calculateTotalTax(price)));
})();