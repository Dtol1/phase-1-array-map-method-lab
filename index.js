const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(words){
    let splitWord = words.split(' ')
    let titleCaseArray = splitWord.map((word) => {
      return word[0].toUpperCase() + word.slice(1)
    })
    let titleCaseSentence = titleCaseArray.join(' ')
    return titleCaseSentence;
    
  })

  
}

// const titelCased = () => {
//   return tutorials.map(function(words){
//     let newTutorial = words.split(' ')
//     return newTutorial
//   })
// }

// const titleCased = () => {
// const testSentence = "C++ is  better";
// const words = testSentence.split(" ");

//   words.map((word) => { 
//       return word[0].toUpperCase() + word.substring(1); 
//   }).join(" ");
// }


