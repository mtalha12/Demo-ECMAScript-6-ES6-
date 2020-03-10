import React from 'react'



// // Example 1
// const Students = ['Kashan', 'Usama', 'Talha']
// for (var name of Students) {
//     console.log(name) // Answer = Kashan Usama Talha
// }


// // Example 2
// const CountryName = "PAKISTAN"
// for (var word of CountryName) {
//     console.log(word) // Answer = P A K I S T A N
// }

// // Example 3
// const Counting = 12345
// for (var num of Counting) {
//     console.log(num) // Answer = TypeError: Counting is not iterable
// }

// // Example 4
// const User = {
//     name: "mtalha12",
//     city: "Karachi",
//     age: 23
// }
// for (var data of User) {
//     console.log(data) // Answer = TypeError: User is not iterable
// }

// // Example 5
// const User = [
//     {
//         name: "Talha",
//         city: "Karachi",
//         age: 23
//     },
//     {
//         name: "Kashan",
//         city: "Karachi",
//         age: 21
//     },
//     {
//         name: "Usama",
//         city: "Karachi",
//         age: 22
//     }
// ]
// for (var data of User) {
//     console.log(data) // Answer = {name: "Talha", city: "Karachi", age: 23}
//     //   {name: "Kashan", city: "Karachi", age: 21}
//     //   {name: "Usama", city: "Karachi", age: 22}
// }

function ForOfLoopFunction() {
    return (
        <div>
            For Of Loop Function
        </div>
    );
}
export { ForOfLoopFunction };