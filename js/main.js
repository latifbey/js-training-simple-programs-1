/**
 * main.js is the entry point to your program.
 * You find the program logic, data structures and function calls in this file 
 */

"use strict";

// Every function has its method
(() => {
    var urlObject = analyseUrl('https://www.google.ch/search?q=url');
    console.log("HOST:", urlObject.host)
    console.log("PATH:", urlObject.path)
    console.log("QUERY:", urlObject.query)
})();


(function() {
    let palindroms = findPalindroms("merhaba dostlar ses verin de karpuz kesek");
    console.log(palindroms);
})();


(function(){
    let gcd = findGcd(9, 27);
})();


(() => {
    let gcd = findGcd(9, 27);
})();