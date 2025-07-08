const diacriticsRegex = /[\u064B-\u065F\u0670\u06D6-\u06ED]/g;

function removeDiacritics(text) {
  return text.replace(diacriticsRegex, '');
}

module.exports = removeDiacritics;
