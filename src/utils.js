// Your code here
export function isPalindrome(word) {
    // Convert the word to lowercase to make the function case-insensitive
    const normalizedWord = word.toLowerCase();
    
    // Reverse the word and compare it to the original
    const reversedWord = normalizedWord.split('').reverse().join('');
    
    return normalizedWord === reversedWord;
  }
  