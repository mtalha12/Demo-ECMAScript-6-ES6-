import React from 'react'; 

// // Example :
// console.log("Going to fecth the lastes posts from web\'Blog")
// const posts = fetch('http://wesbos.com/wp-json/wp/v2/posts');
// console.log("Done!")
// console.log(posts) // Answer = 
// // Promise {<pending>}
// // ► __proto__: Promise
// // [[PromiseStatus]]: "resolved"
// // ▼[[PromiseValue]]: Response
// // type: "cors"
// // url: "https://wesbos.com/wp-json/wp/v2/posts"
// // redirected: true
// // status: 200
// // ok: true
// // statusText: ""
// // >headers: Headers {}
// // body: (...)
// // bodyUsed: false
// // ►__proto__: Response

// //Example : 
// const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
// postsPromise.then(data => {
//     console.log(data) // Answer = 
// //  ▼ Response {type: "cors", url: "https://wesbos.com/wp-json/wp/v2/posts", redirected: true, status: 200, ok: true, …}
// // type: "cors"
// // url: "https://wesbos.com/wp-json/wp/v2/posts"
// // redirected: true
// // status: 200
// // ok: true
// // statusText: ""
// // ►headers: Headers {}
// // body: (...)
// // bodyUsed: false
// // ►__proto__: Response
// })

// //Example : 
// const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
// postsPromise
//     .then(data => data.json())
//     .then(data => { console.log(data) })
// Answer : (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// //Example : 
// const postsPromise = fetch('http://wesbos.com/wp-jsan/wp/v2/posts');
// postsPromise
//     .then(data => data.json())
//     .then(data => { console.log(data) })
//     .catch((err) => {
//         console.error(err) // Answer = Error Response 404
//     })

const Promises = () => {
    return (
        <div>
            Promises
        </div>
    )
};

export { Promises }