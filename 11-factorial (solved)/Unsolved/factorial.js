// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {

// if (num === 0 ){
//     console.log(1)
// }

let result = 1

for (let i = num; i >= 1; i--){

result = result * i;
  }
  console.log(result)
};
