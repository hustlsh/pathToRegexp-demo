var pathToRegexp = require('path-to-regexp');

var keywordPath = '/tours/:filter(^[a-zA-Z]\\w+\\d$)?'
var keys = [];
// console.log(pathToRegexp.parse('/home/:id'));
// console.log(pathToRegexp.parse('/:type(\\\\d+)'));
// console.log(pathToRegexp.parse('/:type-:city([0-9]+)B:dir([0-9]+)'));
// console.log(pathToRegexp(keywordPath, keys).exec('/A100001B126'));
// console.log(keys);
// console.log('/whole-2B126'.match(pathToRegexp('/:type-:city([0-9]+)B:dir([0-9]+)')));


var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
    // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
    '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g');

// console.log(keywordPath.match(PATH_REGEXP))
console.log(PATH_REGEXP.exec(keywordPath));
// console.log(/(\\.|[^\\()])+/g.exec('\([A-Z]+\\d+\)+'))
// console.log('\\'.replace(/([=!:$/()])/g, '\\$1'))
// console.log('\d')
// console.log('\\d')