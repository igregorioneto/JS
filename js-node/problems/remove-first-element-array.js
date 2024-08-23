(() => {
  let numbers = [1,2,3,4,5,6]
  Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] !== undefined) {
        newArray.push(myArray[i]);
      }     
    }
    return newArray;
  }

  Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];      
    }
    return this.reIndex(this);
  }

  numbers = numbers.removeFirstPosition();
  console.log(numbers);
})();