import React from 'react'

// const course = "JAVASCRIPT";
const course = "JAVASC-RIPT";
const flightNumber = "20-AC2020-pk";
// const flightNumber = "20AC2020pk";
const accountNumber = "825242631RT0001";

const make = "BMW";
const modal = "x5";
const color = "Royal Blue";

// // // //    .startsWith()    // // //   


// // Example : 1 
// const result = course.startsWith("JA")
// console.log(result); // Answer = true

// // Example : 2 
// const result = course.startsWith("ja")
// console.log(result); // Answer = false // This is Case-Sensitive.  

// // Example : 2 
// // Question : ????
// const result = course.startsWith("JA", 7)
// console.log(result); // Answer = false // This is Case-Sensitive.  

// // Example : 3 
// const result = flightNumber.startsWith("20")
// console.log(result); // Answer = true 

// // Example : 4 
// const result = flightNumber.startsWith("-", 5) // ("AnyCharactor" 5) // 5 is the check start 5 Charactor.
// console.log(result); // Answer = false // - is not a charactor.This is a symbles 

// // Example : 5 
// const result = flightNumber.startsWith("AC", 3) // ("AnyCharactor" 3) // 3 is the check start 5 Charactor.
// console.log(result); // Answer = true  


// // // //    .endsWith()    // // //   


// // Example : 1 
// const result = flightNumber.endsWith("pk")
// console.log(result); // Answer = true  

// // Example : 2 
// // Question : Work Same is .strartsWith()
// const result = course.endsWith("R", 8) // ("AnyCharactor" 3) // 3 is the check end 5 Charactor.
// console.log(result); // Answer = true  

// // Example : 3 
// const result = accountNumber.endsWith("RT", 10) // ("AnyCharactor" 3) // 3 is the check end 5 Charactor.
// console.log(result); // Answer = true  
// // Check = Start Ke 11 Charactors Ko Check Karega.In 11 Charactors Ke Last Ke 2 Charactors === "RT" ? true : false; 


// // // //    .includes()    // // //   

// // Example : 3 
// const result = flightNumber.includes("-")
// console.log(result); // Answer = true 

// // // //    .includes()    // // //   

// // // Example : 1 
// const result = modal.repeat(3) // Answer = 3 is the Repeated Times
// console.log(result); // Answer = x5x5x5



// const course = "JAVASCRIPT";
// const flightNumber = "20-AC2020-pk";
// const flightNumber = "20AC2020pk";
// const accountNumber = "825242631RT0001";

function NewStringMethod() {
    return (
        <div>New String Method</div>
    )
}

export { NewStringMethod }