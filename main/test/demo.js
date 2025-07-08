const urdu = require('../index');

const text = 'آج کل بُہت زِیادہ گرمی ہے، کیا آپ بھی محسوس کرتے ہیں؟';

console.log('Original:', text);
console.log('Normalized:', urdu.normalize(text));
console.log('No Diacritics:', urdu.removeDiacritics(text));
console.log('Contains Urdu:', urdu.containsUrdu(text));
console.log('Tokenized:', urdu.tokenize(text));
console.log('Filtered Urdu Only:', urdu.filterUrduChars(text));
console.log('Without Punctuation:', urdu.removePunctuation(text));
console.log('Word Count:', urdu.countWords(text));
console.log('Urdu Char Count:', urdu.countUrduChars(text));
console.log('Urdu Alphabet:', urdu.urduAlphabet.join(' '));
