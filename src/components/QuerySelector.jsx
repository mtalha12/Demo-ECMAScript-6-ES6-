import React from 'react';


// function myFunction() {
//     document.querySelector(".example").style.backgroundColor = "red";
// }
function myFunction() {
    console.log("Run")
    document.querySelector(".example").style.backgroundColor = "red";
}

function QuerySelector() {
    return (
        <div>
            {/* QuerySelector Examples. */}
            <h2 className="example">A heading with class="example"</h2>
            <p className="example">A paragraph with class="example".</p>
            {/* <button onClick={myFunction()} > Try it</button> */}
        </div>
    )
}

export { QuerySelector }