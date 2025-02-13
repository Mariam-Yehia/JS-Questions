function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
 
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const evenNumbers = filterEvenNumbers(numbers);

  console.log(evenNumbers); // Output:[2, 4, 6, 8]
  