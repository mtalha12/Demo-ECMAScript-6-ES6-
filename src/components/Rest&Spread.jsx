import React from 'react';

{/* <style>
    .jump span{
        cursor:url('http://csscursor.info/source/santahand.png'), default;
    }
</style> */}



// // .... .... .... Rest Operator .... .... .... // //

// // Example : 1
// const RestExample1 = (name, age, ...categories) => {
//     // console.log(categories instanceof Array) //Answer = true
//     console.log(name, age) // Answer = Talha , 24
//     console.log(categories); // Answer = (4) ["Java", "C++", "React", "React Native"]
// }
// RestExample1("Talha", 24, "Java", "C++", "React", "React Native")

// Example : 2
// // Question : Why (categories instanceof Object) is true???? 
// const RestExample2 = (name, age, ...categories) => {
//     console.log(categories instanceof Object); // Answer = true
//     console.log(categories); // Answer = (4) ["Java", "C++", "React", "React Native"]
// }
// RestExample2("Talha", 24, "Java", "C++", "React", "React Native")

// // Example : 3
// const RestExample3 = (name, age, ...categories) => {
//     console.log(categories); // Answer = (2) [Array(3), "C++"]
// }
// const example1 = ["Jave", "React", "React Native"]
// RestExample3("Talha", 24, example1, "C++")

// // Example : 4
// const RestExample4 = (name, age, ...categories) => {
//     console.log(categories); // Answer = (2) [{…}, "C++"]
// }
// const example1 = { subject1: "Jave", subject2: "React", subject3: "React Native" }
// RestExample4("Talha", 24, example1, "C++")

// // .... .... .... Spread Operator .... .... .... // //

// // Example : 1
// const example1 = { name: "Talha", Class: "B.Com", City: "Karachi" }
// console.log(example1, "Create") //Answer = {name: "Talha", Class: "B.Com", City: "Karachi"} "Create"
// const SpreadExample1 = () => {
//     const dataCopy = example1
//     console.log(dataCopy, "Before Changes") // Answer = {name: "Talha", Class: "B.Com", City: "Karachi"} "Before Changes"
//     dataCopy.name = "Kashsan"
//     console.log(dataCopy, "After Changes") //Answer =  {name: "Kashsan", Class: "B.Com", City: "Karachi"} "After Changes"
// }
// console.log(SpreadExample1(), "Call Function") //Answer = undefined "Call Function"
// // After Function Calling The Real Data Is Changed.
// console.log(example1, "After Function Calling") // Answer = {name: "Kashsan", Class: "B.Com", City: "Karachi"} "After Function Calling"

// // Example : 2
// const example2 = { name: "Talha", Class: "B.Com", City: "Karachi" }
// console.log(example2, "Create") //Answer = {name: "Talha", Class: "B.Com", City: "Karachi"} "Create"
// const SpreadExample2 = () => {
//     const dataCopy = {
//         ...example2,
//         name: "Kashan"
//     }
//     console.log(dataCopy, "After Changes") //Answer =  {name: "Kashsan", Class: "B.Com", City: "Karachi"} "After Changes"
// }
// console.log(SpreadExample2(), "Call Function") //Answer = undefined "Call Function"
// // After Function Calling The Real Data Is No Changed.
// console.log(example2, "After Function Calling") // Answer = {name: "Talha", Class: "B.Com", City: "Karachi"} "After Function Calling"


// // .... .... .... Max Number .... .... .... // //

// // Example : 1
// // Not Working
// const maxValue = Math.max(12345);
// console.log(maxValue); // Answer = 12345

// // Example : 2
// // Not Working
// const maxValue = Math.max("12345");
// console.log(maxValue); // Answer = 12345

// //Example : 3
// const maxValue = Math.max(..."12345");
// console.log(maxValue); // Answer = 5

// //Example : 4
// // Not Working
// const example = "123459876"
// const maxValue = Math.max(example);
// console.log(maxValue); // Answer = 123459876
// console.log(example) // Answer = 123459876

// // //Example : 4
// const example = "123459876"
// const maxValue = Math.max(...example);
// console.log(maxValue); // Answer = 9
// console.log(example) // Answer = 123459876

// //Example : 4
// // Not Working
// const example = "123459876"
// const maxValue = Math.max(...[12345]);
// console.log(maxValue); // Answer = 12345



function RestAndSpreadParameters() {
    return (
        <div>
            <h2 class="jump">SPREADS!</h2>
            RestAnd Spread Parameters
        </div>
    );
}

export { RestAndSpreadParameters };