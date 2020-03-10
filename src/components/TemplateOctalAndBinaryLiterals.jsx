import React from 'react';

// // // // .... Octa Examples .... // // // //

// // Example 1
// const OctalValue = 0o10;
// console.log(OctalValue) // ANswer = 8

// // Example 2
// const OctalValue2 = 0O11;
// console.log(OctalValue2) // ANswer = 9

// // Example 3
// const OctalValue3 = 0101;
// console.log(OctalValue3) // ANswer =  Parsing error: Legacy octal literals are not allowed in strict mode

// // Example 4
// const OctalValue4 = O10;
// console.log(OctalValue4) // ANswer = 'O10' is not defined  no-undef

// // Example 5
// const OctalValue5 = 0o101;
// console.log(OctalValue5) // ANswer = 65

// // // // .... Binary Examples .... // // // //

// // Example 1
// const BinaryValue = 0b10;
// console.log(BinaryValue) // ANswer = 2

// // Example 2
// const BinaryValue2 = 0B11;
// console.log(BinaryValue2) // ANswer = 3

// Example 3,4 & 5 Same as Octa


// // // // .... Template Examples .... // // // //

// // Example 1

// // Es5
// const name = "Muhammad Talha"
// console.log("My name is " + name + " Hadees.") // Answer = My name is Muhammad Talha Hadees.

// // Es6
// const name = "Muhammad Talha"
// console.log(`My name is ${name} Hadees.`) // Answer = My name is Muhammad Talha Hadees.

// // Example 2

// // Es5
// const name = "Muhammad Talha"
// console.log("My name is "
//     + name +
//     " Hadees.") // Answer = My name is Muhammad Talha Hadees.

// // Es6
// const name = "Muhammad Talha"
// console.log(`My 
// name 
// is 
// ${name} 
// Hadees.`) // Answer = My 
// // name 
// // is 
// // Muhammad Talha 
// // Hadees.


// // // // .... TaggedTemplates .... // // // //

// // Example : 1 
// const name = "Talha"
// const age = 23
// const city = "Karachi"

// function highlight(strings, ...value) {
//     console.log(strings) // Answer = (4) ["My name is ", ".My age is ", ".My city is ", ".", raw: Array(4)]
//     console.log(value)  // Answer = (3) ["Talha", 23, "Karachi"]
//     // debugger;
// }
// const sentence = highlight`My name is ${name}.My age is ${age}.My city is ${city}.`
// console.log(sentence); // Answer = undefined


// // Example : 2 
// // Question ????
// const dictionary = {
//     HTML: "Hyper Text Markup Language",
//     CSS: "Cascading Style Sheet",
//     JS: "JavaScript"
// };
// // console.log(dictionary["CSS"])

// function addAbbreviations(strings, ...values) {
//     console.log(strings)
//     // console.log(values)
//     // console.log(dictionary)
//     const abbreviated = values.map(value => {
//         // console.log(value)
//         // console.log(dictionary)
//         // console.log(dictionary[value]);
//         if (dictionary[value]) {
//             return `<abbr title="${dictionary[value]}">${value}</abbr>`
//         }
//         return value;
//     })
//     // console.log(abbreviated)
//     return strings.reduce((sentence, string, m) => {
//         console.log(sentence, ">sentence")
//         console.log(string, ">string") // Question = string Kiya Le Raha He Est To Index Lena Chahiye. = ???? 
//         console.log(m, "m")
//         // return `${sentence}${string}${abbreviated[m] || ''}`
//         return `${sentence}${abbreviated[m] || ''}`
//     })

// }
// // console.log(addAbbreviations, "===")
// const firstName = "Muhammad"
// const lastName = "Talha"
// const sentence = addAbbreviations`Hello my name is ${firstName}${lastName}and I love to code ${'HTML'}, ${'CSS'} and ${'JS'}`
// // console.log(sentence)


// // Reduce Example 
// // Question ???? How To Work????
// const number = [100, 50, 25, 5]
// const result = number.reduce(myFunction)
// console.log(result, "result")


// function myFunction(total, num,) {
//     console.log(num2, "num2")
//     console.log(num3, "num3")
//     console.log(num3, "num4")
//     console.log(total, "total")
//     console.log(num, "num")
//     const functionReturn = total - num
//     console.log(functionReturn, "functionReturn")
//     return (functionReturn)
// }



function TemplateOctalAndBinaryLiteralsFunction() {
    return (
        <div>
            Templatec Octal And Binary Literals Function
        </div>
    );
}
export { TemplateOctalAndBinaryLiteralsFunction };