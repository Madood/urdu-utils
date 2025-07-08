function removePunctuation(text) {
        return text.replace(/[؟،؛!۔“”"(),.:;!?]/g, '');
      }
      
      module.exports = removePunctuation;
      