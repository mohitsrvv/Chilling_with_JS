// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

let string = 'love'
let patternOne = /love/ //with out any flags
let patternTwo = /love/gi //g-means to search in whole text, i - case insensitive
string.match(substring)

let stringg = 'I Love javaScript. If you do not love javascript what else can you love.'
console.log(stringg.match('love'))

