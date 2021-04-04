// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
var result = str.split(' ').map(function(word,index){
    if(index == 0){
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
return result;
};
