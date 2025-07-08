function containsUrdu(text) {
        return /[\u0600-\u06FF]/.test(text);
      }
      
      module.exports = containsUrdu;
      