const prompt = require("prompt-sync")();

function checkPalindrome(sentence) {
  const words = sentence.split(" ");
  let palindromeWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i].replace(/[#!.,%&?/[="_]/g, "").toLowerCase();
    const reverseWord = word.split("").reverse().join("");
    if (word == reverseWord) palindromeWords.push(word);
  }
  if (palindromeWords.length > 0)
    console.log("Found palindromes:", ...palindromeWords);
  else console.log("No palindrome words are found!");
  palindromeWords = [];
}

const sentence = prompt("Enter a sentence: ");
checkPalindrome(sentence);
