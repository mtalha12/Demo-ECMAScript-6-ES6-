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
// console.log(Example4()) // Answer = Accounting // No Break 

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
// console.log(Example5()) // Answer = Accounting // No Break 

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

// // Example : 7
// // Normal Function.
// let a = 5
// function Example7(params) {
//     const name = 'Talha'
//     const subject = "Accounting"
//     console.log(b)
//     var b = 7
//     return (
//         [
//             name,
//             subject,
//         ]
//     )
// }
// console.log(Example7()) // Answer = (2) ["Talha", "Accounting"]
// // console.log(b) //// Answer =   Line 76:13:  'b' is not defined  no-undef // Code Break 

// // Example : 8 
// // Normal Function. 
// const names = ["Talha", "Kashan", "Usama"];
// const fullNames = names.map(function (name) {
//     return `Mr.${name}`
// })
// console.log(fullNames) // Answer = (3) ["Mr.Talha", "Mr.Kashan", "Mr.Usama"]

// // Example : 1 
// // Arrow Function. 
// const names = ["Talha", "Kashan", "Usama"];
// const fullNames1 = names.map((name) => {
//     return `Mr.${name}`
// })
// console.log(fullNames1) // Answer = (3) ["Mr.Talha", "Mr.Kashan", "Mr.Usama"]

// // Example : 2  
// // Arrow Function. 
// const names = ["Talha", "Kashan", "Usama"];
// const fullNames2 = names.map(name => {
//     return `Mr.${name}`
// })
// console.log(fullNames2) // Answer = (3) ["Mr.Talha", "Mr.Kashan", "Mr.Usama"]

// // Example : 3  
// // Arrow Function. 
// const names = ["Talha", "Kashan", "Usama"];
// const fullNames3 = names.map(name => `Mr.${name}`);
// console.log(fullNames3) // Answer = (3) ["Mr.Talha", "Mr.Kashan", "Mr.Usama"]

// // Example : 4  
// // Arrow Function. 
// const names = ["Talha", "Kashan", "Usama"];
// const fullNames4 = names.map(() => `Cool Boss`);
// console.log(fullNames4) // Answer = (3) ["Cool Boss", "Cool Boss", "Cool Boss"]

// // Example : 5  
// // Arrow Function.
// const sayMyName = (name) => { alert(`Hello Mr.${name}!`) }
// console.log(sayMyName("Talha")) // Answer = Show Alert 

// // Example : 6 
// // Arrow Function.
// const race = "100m"
// const winners = ["Kashan", "Usama", "Talha"];
// const win = winners.map((winner, index) => ({ name: winner, race, place: index + 1 }))
// console.log(win)
// console.table(win)
// // // Answer = (3) [{…}, {…}, {…}]
// // 0: {name: "Kashan", race: "100m", place: 1}
// // 1: {name: "Usama", race: "100m", place: 2}
// // 2: {name: "Talha", race: "100m", place: 3}
// // length: 3
// // __proto__: Array(0)



// // // //    .... Default Arguments ....    // // // //

// // Example :  1 
// function calculateBill(total, tax, tip) {
//     return total + (total * tax) + (total * tip);
// }
// const totalBill = calculateBill(100, .15, .10);
// console.log(totalBill);

// // Example :  2 
// function calculateBill(total, tax, tip) {
//     return total + (total * tax) + (total * tip);
// }
// const totalBill = calculateBill(100, .10);
// console.log(totalBill); // Answer = NaN // No Break // Because tip is undefined. 

// // Example :  3 
// function calculateBill(total, tax, tip = .10) {
//     return total + (total * tax) + (total * tip);
// }
// const totalBill = calculateBill(100, .15);
// console.log(totalBill); // Answer = 125  

// // Example :  4 
// function calculateBill(total, tax = .15, tip) {
//     return total + (total * tax) + (total * tip);
// }
// const totalBill = calculateBill(100, undefined, .10);
// console.log(totalBill); // Answer = 125  

// // // Example :  5 
// function calculateBill(total, tax, tip = .10) {
//     console.log(tip)
//     return total + (total * tax) + (total * tip);
// }
// const totalBill = calculateBill(100, .15, .20);
// console.log(totalBill); // Answer = 135 // Because tip rate is 0.20 // Work is same Arrow Function. 

// // // Example :  6 
// const calculateBill = (total, tax, tip = .10) => {
//     console.log(tip)
//     return total + (total * tax) + (total * tip);
// }
// const totalBill = calculateBill(100, .15, .20);
// console.log(totalBill); // Answer = 135 // Because tip rate is 0.20 // Work is same Normal Function. 

// // Example :  7 
// function calculateBill(total, tax, tip) {
//     tax = tax || .15
//     tip = tip || .10
//     return total + (total * tax) + (total * tip);
// }
// const totalBill = calculateBill(100, .13);
// console.log(totalBill); // Answer = 123 // Work is same Arrow Funcrion. 

// // Example : 8 
// const calculateBill = (total, tax, tip) => {
//     tax = tax || .15
//     tip = tip || .10
//     return total + (total * tax) + (total * tip);
// }
// const totalBill = calculateBill(100, .13);
// console.log(totalBill); // Answer = 123 // Work is same normal 


function ArrowFunction() {
    return (
        <div>
            Arrow Function.
            Arrow Function is always anominus function.????
        </div>
    );
}
export { ArrowFunction };