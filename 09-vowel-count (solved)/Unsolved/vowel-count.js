// Write code to return the the number of vowels in `str`

var vowelCount = (str)=> {
let word = str.toLowerCase();
let vowelsCount = 0
let vowels =["a", "e", "i", "o", "u"];

for(var i = 0; i < word.length ; i++)
 {
   if (vowels.indexOf(word[i]) !== -1)
   {
     vowelsCount += 1;
   }
 }
 console.log(vowelsCount);
};
