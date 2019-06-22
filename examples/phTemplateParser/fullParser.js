// Lexer
var lexer = require('../../lib/lexer');
// Parser
var parser = require('../../lib/parser');

// Lexemes
var lexemes = require('./lex_rules');

// Wildcards (operators) for parsing machine
var wildcards = require('./parse_rules').wildcards;
// Parsing rules
var parseRules = require('./parse_rules').rules;

// Custom lexer
var phonemeLexer = lexer(lexemes);
// Custom parser
var phonemeParser = parser(parseRules, wildcards);

module.exports = function(str) {
    let tokens = phonemeLexer(str);
    let result = phonemeParser(tokens);
  
    return result;
}