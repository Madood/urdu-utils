function tokenizeUrdu(text) {
        return text
          .replace(/[؟،؛!۔“”"(),]/g, '')
          .split(/\s+/)
          .filter(Boolean);
      }
      
      module.exports = tokenizeUrdu;
      