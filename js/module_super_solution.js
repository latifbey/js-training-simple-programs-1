/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */

"use strict";

/**
 * A URL PARSER
 * This function analyses an url.
 * Please refer to the "https://de.wikipedia.org/wiki/Uniform_Resource_Locator"
 */
function analyseUrl(pUrl) {
    
    //let regExp = new RegExp();
    
    aaaa="http://www.somesite.se/blah/sdgsdgsdgs";
    //aaaa="http://somesite.se/blah/sese";
        var matches = aaaa.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/);
        alert(matches[1]);
        alert(matches[2]);
}