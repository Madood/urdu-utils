function countWords(text) {
        return text.split(/\s+/).filter(Boolean).length;
      }
      
      function countUrduChars(text) {
        return [...text].filter(ch => /[\u0600-\u06FF]/.test(ch)).length;
      }
      
      module.exports = { countWords, countUrduChars };
      