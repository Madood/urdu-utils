// index.js

const normalize = require('./lib/normalize');
const removeDiacritics = require('./lib/diacritics');
const containsUrdu = require('./lib/isUrdu');
const tokenize = require('./lib/tokenizer');
const filterUrduChars = require('./lib/filterUrduChars');
const removePunctuation = require('./lib/removePunctuation');
const { countWords, countUrduChars } = require('./lib/stats');
const urduAlphabet = require('./lib/urduAlphabet');

module.exports = {
  normalize,
  removeDiacritics,
  containsUrdu,
  tokenize,
  filterUrduChars,
  removePunctuation,
  countWords,
  countUrduChars,
  urduAlphabet
};
