# Urdu Utils 🕌📚

**Urdu Utils** is a modern JavaScript utility library for processing, analyzing, and manipulating Urdu text. It provides essential functions for normalization, diacritic removal, tokenization, Urdu character detection, and more — perfect for developers building multilingual apps, educational tools, or natural language processing pipelines.

[![npm version](https://img.shields.io/npm/v/urdu-utils.svg)](https://www.npmjs.com/package/urdu-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)


## ✨ Features

- 🔤 Normalize Arabic-style characters to proper Urdu characters
- 🧹 Remove Urdu diacritics (Zabar, Zer, Pesh, etc.)
- ✂ Tokenize Urdu text into clean words
- 🔍 Detect presence of Urdu characters in any text
- 🧠 Translate English words to Urdu via a local dictionary
- 📊 Count Urdu characters and word tokens
- 🔠 Access the complete Urdu alphabet
- 🔧 Suitable for browser, Node.js, and CLI integration

---

## 📦 Installation

```bash
npm install urdu-utils
````

---

## 🚀 Usage

```js
const urdu = require('urdu-utils');

const text = 'آپ کا نام کیا ہے؟';

console.log(urdu.normalize(text));          // Normalize variant letters
console.log(urdu.removeDiacritics(text));   // Remove tashkeel
console.log(urdu.tokenize(text));           // ['آپ', 'کا', 'نام', 'کیا', 'ہے']
console.log(urdu.containsUrdu(text));       // true
console.log(urdu.countWords(text));         // 5
console.log(urdu.countUrduChars(text));     // 16
console.log(urdu.translateToUrdu('love'));  // محبت
console.log(urdu.urduAlphabet);             // Array of Urdu letters
```

---

## 📚 API Reference

| Function                      | Description                                      |
| ----------------------------- | ------------------------------------------------ |
| `normalize(text)`             | Normalize characters like `ي` to `ی`, `ك` to `ک` |
| `removeDiacritics(text)`      | Remove harakaat (e.g., ُ ِ َ ّ)                  |
| `tokenize(text)`              | Split text into Urdu words                       |
| `containsUrdu(text)`          | Returns `true` if Urdu script is found           |
| `filterUrduChars(text)`       | Returns string with only Urdu characters         |
| `removePunctuation(text)`     | Removes Urdu and English punctuation             |
| `countWords(text)`            | Number of words in text                          |
| `countUrduChars(text)`        | Number of Urdu characters                        |
| `urduAlphabet`                | Array of Urdu characters                         |
| `translateToUrdu(word)`       | Translate English word to Urdu                   |
| `translateSentence(sentence)` | Translate an English sentence to Urdu            |

---

## 🔠 Urdu Alphabet

```js
console.log(urdu.urduAlphabet.join(' '));
```

```
ا ب پ ت ٹ ث ج چ ح خ د ڈ ذ ر ڑ ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن ں و ہ ھ ء ی ے ئ ؤ آ ۃ
```

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Madood Maharvi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction...
```

> See full license in the [LICENSE](./LICENSE) file.

---

## 🤝 Contributing

Pull requests are welcome! If you'd like to add features (e.g. Urdu stemming, transliteration, or CLI tools), feel free to fork and contribute.

---

## 🧠 Future Plans

* Roman Urdu → Urdu transliteration
* Sentence-level translation using APIs
* CLI tool for bulk text processing
* Urdu stopword removal
* Browser bundle via CDN

---

## 📬 Contact

Built with ❤️ by [Madood Maharvi](https://github.com/Madood)
GitHub: [github.com/Madood/urdu-utils](https://github.com/Madood/urdu-utils)
npm: [npmjs.com/package/urdu-utils](https://www.npmjs.com/package/urdu-utils)

---

> ✨ Urdu Utils helps you normalize and tokenize with elegance — your Urdu NLP toolkit starts here.

````

---

## 📥 To Use It

1. Save this as `README.md` in the root of your project.
2. Commit and publish:

```bash
git add README.md
git commit -m "Add full project README"
npm version patch
npm publish
````

