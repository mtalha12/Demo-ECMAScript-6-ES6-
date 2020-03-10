import React from 'react';

const myPromise = new Promise((resolve, reject) => {
    console.log("This is answer")
});

myPromise.then((data) => {
    console.log("Hello")
    console.log(data)
})

const BuildMyOwnPromise = () => {
    return (
        <div>
            BuildMyOwnPromise
        </div>
    )
};

export { BuildMyOwnPromise }