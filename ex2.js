function findLargestNumber(arr) {
    return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}
  
console.log(findLargestNumber([10, 25, 78, 99, 45, 63])); // Output: 99


  
  