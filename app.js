const MORSE_CODE = {
    '....': 'H',
    '.': 'E',
    '-.--': 'Y',
    '.---': 'J',
    '..-': 'U',
    '-..': 'D',
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
    '.----.': "'",
    '-.-.--': '!',
    '-..-.': '/',
    '-.--.': '(',
    '-.--.-': ')',
    '.-...': '&',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '.-.-.': '+',
    '-....-': '-',
    '..--.-': '_',
    '.-..-.': '"',
    '...-..-': '$',
    '.--.-.': '@',
    '...---...': 'SOS'
  };
function toCamelCase(str){
    if(str === '') {
      console.log('Empty string');
      return;
    }
    
    let splitString = str.replace(/_/g, '-').toLowerCase().split('-');
    
    for(let i = 1; i < splitString.length; i++) {
      splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    }
  
    let result = splitString.join('');
    console.log(result);
  }


  function squareDigits(num) {
    return result = Number(String(num).split('').map(digit => Math.pow(Number(digit), 2)).join(''));
  }


  function decodeMorse(morseCode) {
    return morseCode.trim().split('   ').map(word =>
      word.split(' ').map(letter => MORSE_CODE[letter]).join('')
    ).join(' ');
  }
  
  console.log(squareDigits(9119))

  console.log(decodeMorse('.... . -.--   .--- ..- -.. .')); // Outputs: "HEY JUDE"

  



  Array.prototype.last = function() {
    if (this.length === 0) return -1;
    return this[this.length - 1];
  }
  
  // Testing with some arrays
  let nums1 = [null, {}, 3];
  console.log(nums1.last()); // Outputs: 3
  
  let nums2 = [];
  console.log(nums2.last()); // Outputs: -1

  
  function getSum(a, b) {
    let min = Math.min(a, b),
        max = Math.max(a, b),
        sum = 0;

    for(let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

// Test the function
console.log(getSum(1, 0)); // Output: 1
console.log(getSum(1, 2)); // Output: 3
console.log(getSum(0, -1)); // Output: -1
console.log(getSum(-1, 2)); // Output: 2

console.log('***** POP GROWTH ******')
function populationGrowth(p0, percent, delta, p) {
  let years = 0;
  while (p0 < p) {
      p0 += p0 * (percent / 100) + delta;
      years++;
  }
  return years;
}

// Test the function
console.log(populationGrowth(1000, 2, 50, 2000)); 


console.log('Factorial');

function lastNonZeroDigit(n) {
  if (n < 10) {
      return [1, 1, 2, 6, 4, 2, 2, 4, 2, 8][n];
  }

  // Count the number of fives in n!
  let fiveCount = 0;
  let i = 5;
  while (i <= n) {
      fiveCount += Math.floor(n / i);
      i *= 5;
  }

  // Calculate the product of the last digits of each number from 1 to n, 
  // excluding multiples of 5.
  let lastDigit = 1;
  for (i = 1; i <= n; i++) {
      if (i % 5 !== 0) {
          lastDigit = (lastDigit * i) % 10;
      }
  }

  // Adjust for the extra factor of 2 for each 5 in n!
  lastDigit = (lastDigit * Math.pow(2, fiveCount)) % 10;

  return lastDigit;
}

// Test the function
console.log(lastNonZeroDigit(12)); // Output: 6


console.log('**** PIG LATIN ****')

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


function pigLatin(phrase) {
  console.log(phrase.split(' '))
}

pigLatin('Hello, how are you?')



