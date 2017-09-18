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
    return {
        host: findHost(pUrl),
        query: findQuery(pUrl),
        schema: findSchema(pUrl),
        port: findPort(pUrl),
        path: findPath(pUrl),
        fragment: findFragment(pUrl)
    };
}






/***************************************
********** PRIVATE FUNCTIONS ***********
****************************************/

let urlMetaData = [":", "/", "?", "#"];


function findSchema(pUrl) {
    return pUrl.slice(0, pUrl.indexOf("://"));
}

function findHost(pUrl) {
    let host = null;

    if (pUrl.includes(":", 7) == true) {
        host = pUrl.slice(pUrl.indexOf("//") + 2, pUrl.indexOf(":", 7));
    } else if (pUrl.includes("/", 10)) {
        host = pUrl.slice(pUrl.indexOf("//") + 2, pUrl.indexOf("/", 10));
    } else if (pUrl.includes("?")) {
        host = pUrl.slice(pUrl.indexOf("//") + 2, pUrl.indexOf("?"));
    } else if (pUrl.includes("#")) {
        host = pUrl.slice(pUrl.indexOf("//") + 2, pUrl.indexOf("#"));
    } else {
        host = pUrl.slice(pUrl.indexOf("//") + 2);
    }

    return host;
}

function findPort(pUrl) {
    let port = null;
    if (pUrl.includes(":", 10)) {
        if (pUrl.includes("/", 10)) {
            port = pUrl.slice(pUrl.indexOf(":", 10) + 1, pUrl.indexOf("/", 10));
        } else if (pUrl.includes("?")) {
            port = pUrl.slice(pUrl.indexOf(":", 10) + 1, pUrl.indexOf("?"));
        } else if (pUrl.includes("#")) {
            port = pUrl.slice(pUrl.indexOf(":", 10) + 1, pUrl.indexOf("#"));
        } else {
            port = pUrl.slice(pUrl.indexOf(":", 10) + 1);
        }
    }
    
    return port;
}

function findPath(pUrl){
    let path = null;
    if(pUrl.includes("/", 10)) {
        if (pUrl.includes("?")) {
            path = pUrl.slice(pUrl.indexOf("/", 10) + 1, pUrl.indexOf("?"));
        } else if (pUrl.includes("#")) {
            port = pUrl.slice(pUrl.indexOf("/", 10) + 1, pUrl.indexOf("#"));
        } else {
            port = pUrl.slice(pUrl.indexOf("/", 10) + 1);
        }
    }
    
    return path;
}

function findQuery(pUrl){
    let query = null;
    
    if (pUrl.includes("?")) {
        if (pUrl.includes("#")) {
            query = pUrl.slice(pUrl.indexOf("?") + 1, pUrl.indexOf("#"));
        } else {
            query = pUrl.slice(pUrl.indexOf("?") + 1);
        }
    }
    
    return query;
}

function findFragment(pUrl){
    let fragment = null;
    if (pUrl.includes("#")) {
        fragment = pUrl.slice(pUrl.indexOf("#") + 1);
    }
    return fragment;
}