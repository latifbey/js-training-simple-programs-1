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
    
    var parts = pUrl.split("://");
    
    return {
        schema: parts[0],
        host: findHost(parts[1]),
        port: findPort(parts[1]),
        query: findQuery(parts[1]),
        path: findPath(parts[1]),
        fragment: findFragment(parts[1]),
    };
}


/***************************************
********** PRIVATE FUNCTIONS ***********
****************************************/

// Use Data Structures

let urlMetaData = [":", "/", "?", "#"];


function findHost(pUrl) {
    let host = null;

    if (pUrl.includes(":") == true) {
        host = pUrl.slice(0, pUrl.indexOf(":", 10));
    } else if (pUrl.includes("/", 10)) {
        host = pUrl.slice(0, pUrl.indexOf("/", 10));
    } else if (pUrl.includes("?")) {
        host = pUrl.slice(0, pUrl.indexOf("?"));
    } else if (pUrl.includes("#")) {
        host = pUrl.slice(0, pUrl.indexOf("#"));
    } else {
        host = pUrl.slice(0);
    }

    return host;
}

function findPort(pUrl){
    return parse(":", pUrl);
}

function findPath(pUrl){
    return parse("/", pUrl);
}

function findQuery(pUrl){
    return parse("?", pUrl);
}

function findFragment(pUrl){
    return parse("#", pUrl);
}

function parse(pChar, pUrl){
    let parsedElement = null;
    if(pUrl.includes(pChar)){
        for(let i=urlMetaData.indexOf(pChar)+1; i<urlMetaData.length; i++){
            if (pUrl.includes(urlMetaData[i])) {
                return pUrl.slice(pUrl.indexOf(pChar) + 1, pUrl.indexOf(urlMetaData[i]));
            }
        }
        
        return pUrl.slice(pUrl.indexOf(pChar) + 1);
    }
}
