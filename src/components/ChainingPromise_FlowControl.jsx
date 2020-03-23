import React from 'react';


// const posts = [
//     { title: 'I love JavaScript', author: 'Syed Kashan Adil', id: 1 },
//     { title: 'CSS', author: 'Muhammad Umer', id: 2 },
//     { title: 'Dev tools tricks', author: 'Muhammad Talha', id: 3 },
// ];

// const authors = [
//     { name: 'Syed Kashan Adil', twitter: '@syed.kashan.adil', bio: 'Mobile Developer' },
//     { name: 'Muhammad Umer', twitter: '@muhammad.umer', bio: 'Web CSS Tricks and CodePen' },
//     { name: 'Muhammad Talha', twitter: '@mtalha12', bio: 'Designer' },
// ];

// function getPostById(id) {
//     // Create a new promise 
//     return new Promise((resolve, reject) => {
//         // Using a settimeout to mimick databse
//         setTimeout(() => {
//             // Find the post we want
//             const post = posts.find(post => post.id === id);
//             if (post) {
//                 resolve(post); // Send the post back
//             } else {
//                 reject(Error('No Post Was Found'))
//             }
//         }, 2000)
//     })
// }

// function hydrateAuthor(post) {
//     // Create a new promise 
//     return new Promise((resolve, reject) => {
//         // Find the author
//         const authorDetails = authors.find(person => person.name === post.author);
//         // console.log(authorDetails)
//         if (authorDetails) {
//             // "hydrate" the post object with the author object
//             post.author = authorDetails;
//             resolve(post);
//         } else {
//             reject(Error('Can not find the author'))
//         }
//     });
// }

// // console.log(getPostById(2))
// getPostById(2)
//     .then(post => {
//         // console.log(post);
//         return hydrateAuthor(post)
//     })
//     .then(post => {
//         console.log(post)
//     })
//     .catch(err => {
//         console.log(err)
//     })

const ChainingPromise_FlowControl = () => {

    return (
        <div>
            Chaining Promise Flow Control
        </div>
    )
}

export { ChainingPromise_FlowControl }