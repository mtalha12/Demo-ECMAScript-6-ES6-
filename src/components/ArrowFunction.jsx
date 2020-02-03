import React from 'react';

// // Example : 1
// // Normal Function.
// function Example1(params) {
//     const a = 1
// }
// console.log(Example1()) // Answer = Undefined  = Becouse No return inside the function 

// // Example : 2
// // Normal Function.
// function Example2(params) {
//     return 2
// }
// console.log(Example2()) // Answer = 2

// // Example : 3
// // Normal Function.
// function Example3(params) {
//     const name = 'Talha'
//     return name
// }
// console.log(Example3()) // Answer = Talha

// // Example : 4
// // Normal Function.
// function Example4(params) {
//     const name = 'Talha'
//     const subject = "Accounting"
//     return name, subject
// }
// console.log(Example4()) // Answer = Accounting

// // Example : 5
// // Normal Function.
// function Example5(params) {
//     const name = 'Talha'
//     const subject = "Accounting"
//     return (
//         name,
//         subject
//     )
// }
// console.log(Example5()) // Answer = Accounting

// // Example : 6
// // Normal Function.
// function Example6(params) {
//     const name = 'Talha'
//     const subject = "Accounting"
//     return (
//         {
//             name,
//             subject
//         }
//     )
// }
// console.log(Example6()) // Answer = {name: "Talha", subject: "Accounting"}

// Example : 7
// Normal Function.
let a = 5
function Example7(params) {
    const name = 'Talha'
    const subject = "Accounting"
    console.log(b)
    var b = 7
    return (
        [
            name,
            subject,
        ]
    )
}
console.log(Example7()) // Answer = (2) ["Talha", "Accounting"]
// //console.log(b) //// Answer =   Line 76:13:  'b' is not defined  no-undef



function ArrowFunction() {
    return (
        <div>
            Arrow Function
        </div>
    );
}
export { ArrowFunction };