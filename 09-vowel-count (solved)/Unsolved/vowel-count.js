// Write code to return the the number of vowels in `str`
const vowels =["a", "e", "i", "o", "u"];

// var vowelCount = (str)=> {
// let word = str.toLowerCase();
// let vowelsCount = 0
//
// for(var i = 0; i < word.length ; i++)
//  {
//    if (vowels.indexOf(word[i]) !== -1)
//    {
//      vowelsCount += 1;
//    }
//  }
//  return(vowelsCount);
// };

const vowelCount = str => str
  .split("")
  .reduce( (vowelCount, char) => vowels.includes(char.toLowerCase()) ? vowelCount + 1 : vowelCount, 0 );
