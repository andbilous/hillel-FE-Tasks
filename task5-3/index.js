function removeSymbols(word, symbols) {
  word = word.toLowerCase();
  for (var i = 0; i < symbols.length; i++) {
    symbols[i] = symbols[i].toLowerCase();
    for (var k = 0; k < word.length; k++) {
      word = word.replace(symbols[i], '');
    }
  }
  return word;
}
document.write(removeSymbols('hello world', ['l', 'd']));