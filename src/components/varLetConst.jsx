import React from 'react';

// // Example 1 
// // Create Vaiable With Var.
// console.log(a)  // Answer = undefined
// let a = 2

// // Example 2 
// Create Variable With Let Or Const.
// console.log(a)  // Answer = ReferenceError: Cannot access 'a' before initialization
// let a = 2

// // Example 3 
// Create Variable With Var Or Let.
// var a;
// console.log(a); // // Answer = undefined

// // Example 4 
// Create Variable With Const.
// const a;
// console.log(a); // Line 17:8:  Parsing error: Unexpected token

// // Example 5 
// Create Variable With Const.
// const a;
// a = 2
// console.log(a) // Line 21:8:  Parsing error: Unexpected token  

// // Example 6 
// const person = {
//     name: "Talha",
//     age: 23,
// }
// console.log(person) // Answer = // Code Break 
// person = { name: "Kashan", age: 21 } // TypeError: Assignment to constant variable.
// console.log(person) // Answer = // Code Break 

// // Example 7 
// const person = {
//     name: "Talha",
//     age: 23,
// }
// console.log(person) // Answer = {name: "Talha", age: 23}
// person.name = "Kashan"
// person.age = 21
// console.log(person) // Answer = {name: "Kashan", age: 21}

// // Example 8 
// let person = {
//     name: "Talha",
//     age: 23,
// }
// console.log(person) // Answer = {name: "Talha", age: 23}
// person = { name: "Kashan", age: 21 }
// console.log(person) // Answer = {name: "Kashan", age: 21}

// // Example 8 
// const person = {
//     name: "Talha",
//     age: 23,
// }
// console.log(person) // Answer = {name: "Talha", age: 23}
// Object.freeze(person)
// // person.name = "Kashan", //  Line 64:1:  Expected an assignment or function call and instead saw an expression  no-unused-expressions
// // person.age = 21, // Code Break 
// console.log(person) // Answer = {name: "Talha", age: 23} //Code Break 

// Example: 9 (A)
// Question ????  
function userName() {
    var name = 'Talha';
    console.log(name)
}
// console.log(name); // Line 71:13:  Unexpected use of 'name'  no-restricted-globals

// // Example: 9 (B)
// // Question ????  
// (function () {
//     var name = 'Talha';
//     console.log(name)
// })()
// console.log(name); //  Line 82:13:  Unexpected use of 'name'  no-restricted-globals


// // Example 
// // Consition: A  (1)
// var a = 100
// if (a > 90) {
//     var b = a * 5
//     console.log(b) // Answer = 500
// }
// console.log(a) // Answer = 100
// console.log(b) // Answer = 500

// // Consition: A (2)
// // Question ???? 
// var a = 100
// if (a > 90) {
//     let b = a * 5
//     console.log(b) // Answer = 500 // Code Break 
// }
// console.log(a) // Answer = 100 // Code Break 
// console.log(b) //  Line 41:13:  'b' is not defined  no-undef

// // Consition: A (3) 
// // Question ????
// var a = 100
// function checkVarAndLet() {
//     var b = a * 5
//     console.log(b)
// }
// console.log(a) // Answer = 100 // Code Break
// // console.log(b) // Answer = Line 49:13:  'b' is not defined  no-undef
// checkVarAndLet()
// console.log(a) // Answer = 100 // Code Break
// console.log(b) Answer = // Line 52:13:  'b' is not defined  no-undef

// // Condition B (1)
// const key = 'abc123'
// let points = 50
// let winner = false

// if (points > 40) {
//     console.log("Run Condition")
//     let winner = true
// }
// console.log(winner) // Answer = false

// // Condition B (2)
// const key = 'abc123'
// let points = 50
// var winner = false

// if (points > 40) {
//     console.log("Run Condition")
//     var winner = true
// }
// console.log(winner) // Answer = true

















function DeclaredVariables() {
    return (
        <div>
            Declared Variables
        </div>
    );
}

export default DeclaredVariables;
