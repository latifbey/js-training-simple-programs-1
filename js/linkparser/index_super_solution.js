/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */

"use strict";

/**
 * A URL PARSER by RegExp
 * This function analyses an url.
 * Please refer to the "https://de.wikipedia.org/wiki/Uniform_Resource_Locator"
 */
function analyseUrl(pUrl) {
    //let regExp = new RegExp();
    let aaaa="http://www.somesite.se/blah/sdgsdgsdgs";
    //aaaa="http://somesite.se/blah/sese";
        var matches = aaaa.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/);
        alert(matches[1]);
        alert(matches[2]);
}

// A1
// <a href="" />

// A2
// const url = new URL('../cats', 'http://www.example.com/dogs');
// console.log(url.hostname); // "www.example.com"
// console.log(url.pathname); // "/cats"