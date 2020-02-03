import React from 'react';

// Block Scoping 

// // Example : 1
// const Example1 = () => {
//     let a = 1
//     console.log(a); //Answer = 1
// }
// // console.log(a) // Line 10:13:  'a' is not defined  no-undef
// Example1();

// // Example : 2
// const Example2 = () => {
//     let a = 1
//     let b = 2
//     console.log(a); // Answer = 1
//     console.log(b); // Answer = 2
//     if (a) {
//         let b = 3
//         console.log(b) // Answer = 3
//     }
//     console.log(b) // Answer = 2
// }
// Example2();

// // Example : 3
// const b = 10
// const Example3 = () => {
//     let a = 1
//     console.log(b) // Answer = 10
//     if (a) {
//         console.log(b) // Answer = 10
//     }
// }
// console.log(b) // Answer = 10
// Example3();

function BlockScoping() {
    return (
        <div>
            Block Scoping
        </div>
    );
}

export { BlockScoping };
