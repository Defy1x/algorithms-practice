// Write code to add all the numbers in `arr` and return the total

// var sumArray = function(arr){
// var sum = 0
//   for(let i = 0; i < arr.length; i++){
//   var sumArray = sum += arr[i];
// }
//   return(sumArray);
// };

var sumArray = arr => arr.reduce( (sum, num) => sum + num, 0)
