// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  return str.split(' ').map( word => word.substring(0,1).toUpperCase() + word.substring(1)).join(' ');
};
