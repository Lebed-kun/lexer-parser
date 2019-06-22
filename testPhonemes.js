// Phonetic template parser
var templateParser = require('./examples/phTemplateParser/fullParser');

// Test
var word = templateParser('CV(C)(V)');
console.log(word);