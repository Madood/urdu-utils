# Urdu Utils 🕌📚

**Urdu Utils** is a modern JavaScript utility library for processing, analyzing, and manipulating Urdu text. It provides essential functions for normalization, diacritic removal, tokenization, Urdu character detection, and more — perfect for developers building multilingual apps, educational tools, or natural language processing pipelines.

---

## 🚀 Features

- 🔠 Normalize Arabic variants to standard Urdu characters
- 🧹 Remove Urdu diacritics (Zabar, Zer, Pesh, etc.)
- ✂ Tokenize Urdu sentences into clean word arrays
- 🔍 Detect if a string contains Urdu script
- 📊 Count Urdu characters and words
- 🧠 Translate English words to Urdu using a custom dictionary
- 🔤 Reference the complete Urdu alphabet
- 🔧 Easy integration into CLI, Node.js, or browser projects

---

## 📦 Installation

 ```bash
npm install urdu-utils

## 📦 Usage
const urdu = require('urdu-utils');

const text = 'آج بہت گرمی ہے، کیا آپ بھی محسوس کرتے ہیں؟';

console.log(urdu.normalize(text));            // Normalize Arabic chars to Urdu
console.log(urdu.removeDiacritics(text));     // Remove Zabar, Zer, etc.
console.log(urdu.tokenize(text));             // ['آج', 'بہت', 'گرمی', 'ہے', ...]
console.log(urdu.containsUrdu(text));         // true
console.log(urdu.countWords(text));           // 8
console.log(urdu.countUrduChars(text));       // 30+
console.log(urdu.urduAlphabet);               // Complete array of Urdu letters
console.log(urdu.translateToUrdu('love'));    // محبت 
