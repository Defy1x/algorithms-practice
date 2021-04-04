// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
  let num1 = Math.max(...arr)
  arr2 = arr.filter(item => item !== num1)
  let num2 = Math.max(...arr2)
  let result = num1 * num2
  return result
};
