/**
 * There are many ways to create a custom object with own variable and methods.
 *
 * 1) Function constructor
 * 2) Object.create()
 * 3) Factory function
 * 4) Classes
 *
 */


let x = 1;

function Person(){
    
    let x = 2; 
    function innerFunction(){
        let x = 4;
        console.log(x);
    }
    
    console.log(x);
    console.log(innerFunction());
}

console.log(x); // 1
console.log(Person());