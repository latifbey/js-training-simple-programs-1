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
    let analyseResult = {
        host: null,
        query: null,
        schema: null,
        fragment: null
    }

    // I extract to schema from the URL ... 
    analyseResult.schema = findSchema(pUrl);
    analyseResult.host = findHost(pUrl);
    analyseResult.port = fincPort(pUrl);
    


    /*
    path
    */



    /* I want to find query ... all gueries start with "?" symboll... So I will start with If and i will write as condition inside "if" it is true that there is "?" inside pUrl.... and then if there is one, and then i will use "if" and 'else' ... first 'if' says that query ends with "#" and else says that query doesnt end with anything.
     */
    if (pUrl.includes("?")) {
        if (pUrl.includes("#")) {
            analyseResult.query = pUrl.slice(pUrl.indexOf("?") + 1, pUrl.indexOf("#"));
        } else {
            analyseResult.query = pUrl.slice(pUrl.indexOf("?") + 1);
        }
    }

    if (pUrl.includes("#")) {
        analyseResult.fragment = pUrl.slice(pUrl.indexOf("#") + 1);
    }

    return analyseResult;
}


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

