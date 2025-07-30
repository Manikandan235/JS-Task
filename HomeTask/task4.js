const sentence = "Welcome to JavaScript World";
const reversedWords = sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");
console.log("Reversed Words:", reversedWords);

const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
const unique = [...new Set(numbers)];
console.log("Unique Numbers:", unique);

const input = "Count the vowels in this sentence";
const vowels = input.match(/[aeiou]/gi);
const count = vowels ? vowels.length : 0;
console.log("Vowel Count:", count);
