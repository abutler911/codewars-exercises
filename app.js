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

  