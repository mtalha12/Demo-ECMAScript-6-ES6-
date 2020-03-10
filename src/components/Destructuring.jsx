import React from 'react'

// // Example 1
// const Salary = [30000, 20000, 10000];
// const [high, average, low] = Salary
// console.log(average); // Answer = 20000
// console.log(low); // Answer = 10000
// console.log(high); // Answer = 30000

// // Example 2
// const Salary = [30000, 20000, 10000];
// const [high, low] = Salary
// console.log(low); // Answer = 20000
// console.log(high); // Answer = 30000

// // Example 3
// const Salary = [30000, 20000, 10000];
// const [high, , low] = Salary
// console.log(high); // Answer = 30000
// console.log(low); // Answer = 10000

// // Example 4
// const Salary = [30000, 20000, 10000];
// const [high, ...remaning] = Salary
// console.log(high); // Answer = 30000
// console.log(remaning); // Answer = (2) [20000, 10000]

// // Example 5
// const Salary = [20000, 30000, [10000, 50000]];
// const [low, average, high = 80000, [aLow, aAverage]] = Salary // TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
// console.log(aLow); // Answer = Code Break
// console.log(aAverage); // Answer = Code Break

// // Example 6
// const Salary = [20000, 30000, [10000, 50000]];
// const [low, average, [aLow, aAverage], high = 80000,] = Salary
// console.log(aLow); // Answer = 10000
// console.log(aAverage); // Answer = 50000 

// // Exapmle : 
// const data = "Basketball,Sports,3523,23";
// const [itemName, category, number, age] = data.split(",")
// console.log(`ItemName : ${itemName} , Category : ${category} , number : ${number} , age : ${age}`); // Answer = ItemName : Basketball , Category : Sports , number : 3523 , age : 23

// // example : 
// const number = "12345";
// const string = "String"
// const obj = { firstName: "Muhammad", lastName: "Talha", age: 23, }
// const splitNumber = number.split("")
// const splitString = string.split("")
// console.log(splitNumber)
// console.log(splitString)
// const reverseNumber = splitNumber.reverse()
// console.log(reverseNumber)
// const joinReverseString = reverseNumber.join()
// console.log(joinReverseString)

// // Example : 
// // Question = ????
// var inRing = "Hulk Hogan";
// var onSide = "The Rock";
// // const [inRing, onSide] = [onSide, inRing]; // Answer =  Line 62:8:  Parsing error: Identifier 'inRing' has already been declared 
// console.log(inRing) // Code Break 
// console.log(onSide) // Code Break 
// var referee = "Walt";
// var spectator = "ALL"
// inRing = onSide
// console.log(inRing) Answer = ???? 
// console.log(onSide) Answer = ???? 
// onSide = referee
// console.log(inRing) Answer = ???? 
// console.log(onSide) Answer = ???? 
// referee = spectator
// console.log(inRing) Answer = ???? 
// console.log(onSide) Answer = ???? 


// // Example 7 
// const Salary = {
//     low: 20000,
//     average: 50000,
//     high: 80000,
// };
// const { low, average, high } = Salary
// console.log(average); // Answer = 50000

// // Example 8 
//Question ????
// const Salary = {
//     low: 20000,
//     average: 50000,
//     high: 80000,
// };
// const { low, average = 40000, high } = Salary
// console.log(average); // Answer = 50000 ????

// // // Example 9 
// //Question ????
// const Salary = {
//     low: 20000,
//     average: 50000,
//     high: 80000,
// };
// const { low: newLow, average: newAverage, high: newHigh } = Salary
// console.log(newAverage); // Answer = 50000 ????

// // Example 10
// const [minCode, maxCode] = "AB"
// console.log(`min: ${minCode} max: ${maxCode}`) // Answer = min: A max: B

// // Example 11
// function example7([low, average], high = 80000) {
//     console.log(average) // Answer = 50000
// }
// example7([30000, 50000])

// // // Example  12
// const person = {
//     first: "Muhammad",
//     last: "Talha",
//     country: "Pakistan",
//     city: "Karachi",
//     gitHub: "mtalha12",
//     twitter: "talhahadees"
// };
// const { first, last, twitter } = person;

// console.log(twitter)
// const talha = {
//     first: 'Muhammad',
//     last: 'Talha',
//     links: {
//         social: {
//             twitter: 'https://twitter.com/talhahadees',
//             facebook: 'https://facebook.com/muhammadtalha',
//         },
//         web: {
//             gmail: 'https://gmail.com/talhahadees786@gmail.com',
//             github: 'https://github.com/mtalha12',
//         }
//     }
// }
// //  // ES: 5
// // // const twitter = talha.links.social.twitter;  //  Line 106:7:  Parsing error: Identifier 'twitter' has already been declared 
// const facebook = talha.links.social.facebook;
// // // ES: 6 
// // const { twitter, facebook } = talha.links.social; //  Line 109:9:  Parsing error: Identifier 'twitter' has already been declared
// // // const { facebook } = talha.links.social; // Answer = // already declared 
// // // console.log(twitter, "  Link") // Answer = // already declared 
// console.log(facebook, "  Link") // Answer = https://facebook.com/muhammadtalha
// const { twitter: tweet, facebook: fb } = talha.links.social;
// console.log(tweet) // Answer = https://twitter.com/talhahadees
// console.log(fb) // Answer = https://facebook.com/muhammadtalha

// // Example : 13 
// const settings = { width: 300, color: 'black' } // height, fontSize
// const { width = 100, height = 100, color = "red", fontSize = 26 } = settings;
// console.log(width, "width"); // Answer = 300 "width"
// console.log(height, "height") // Answer = 100 "height"
// console.log(color, "color") // Answer = black color
// console.log(fontSize, "fontSize") // Answer = 26 "fontSize"

// // Example : 14 
// // Object Destracturing with variable renaming a default values.
// const { w: width = 400, h: height = 500 } = { w: 800 }
// console.log(width); // Answer = 800,
// console.log(height); // Answer = 500,
// // console.log(h); // ANswer = Line 130:13:  'h' is not defined  no-undef
// // console.log(w); // ANswer = Line 131:13:  'w' is not defined  no-undef

// // Example : 15 
// function totalCalc({ total = 100, tip = .15, tax = .13 }) {
//     return total + (total * tip) + (total * tax)
// }
// // const bill = totalCalc() // Answer = ypeError: Cannot read property 'total' of undefined 
// // console.log(bill) // Answer = Code Break 
// const bill = totalCalc({ total: 200, tip: 0.20, tax: 0.15 })
// console.log(bill) // Answer = 270 
// // const bill = totalCalc({})
// // console.log(bill) // Answer = 128  

function DestructuringFunction() {
    return (
        <div>
            Destructuring Function
        </div>
    );
}
export { DestructuringFunction };