// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
 let userWord = str;
 let reversedWord = userWord.split("").reverse().join("");

 if (reversedWord === userWord){
   return true;
 }
 else if (reversedWord !== userWord){
   return false;
 }

};
