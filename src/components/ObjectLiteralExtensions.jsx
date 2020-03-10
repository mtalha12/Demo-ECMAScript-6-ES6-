import React from "react";

// // Example : 1 

// // In Es5
// const price = 10
// const quantity = 100
// const productView = {
//     price: price,
//     quantity: quantity,
// }
// console.log(productView); // Answer = {price: 10, quantity: 100}

// // In Es6
// const price = 10
// const quantity = 100
// const productView = {
//     price,
//     quantity,
// }
// console.log(productView); // Answer = {price: 10, quantity: 100}


// // Example 2 
// const price = 10
// const quantity = 100
// const productView = {
//     price: 8,
//     quantity: 10,
//     calculateValue() {
//         return price * quantity
//     }
// }
// console.log(productView.calculateValue()); // Answer = 1000


// // Example 3
// const price = 10
// const quantity = 100
// const productView = {
//     price: 8,
//     quantity: 10,
//     calculateValue() {
//         return this.price * this.quantity
//     }
// }
// console.log(productView.calculateValue()); // Answer = 80

// // Example 4
// const field = 'DynamicField'
// const price = 10
// const productView = {
//     [field]: price
// }
// console.log(productView) // Answer = {DynamicField: 10}

// // Example 5
// const field = 'DynamicField'
// const price = 10
// const productView = {
//     [field + '123']: price
// }
// console.log(productView) // Answer = {DynamicField123: 10}

// // Example 6
// const method = "doit"
// const productView = {
//     [method + "-01"]() {
//         console.log("mtalha12");
//     }
// }
// productView['doit-01'](); // Answer = mtalha12




function ObjectLiteralExtensionsFunction() {
    return (
        <div>
            Object Literal Extensions Function
        </div>
    );
}
export { ObjectLiteralExtensionsFunction };