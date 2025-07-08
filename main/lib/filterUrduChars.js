function filterUrduChars(text) {
        return [...text].filter(ch => /[\u0600-\u06FF]/.test(ch)).join('');
      }
      
      module.exports = filterUrduChars;
      