import React from "react";
import ReactDOM from "react-dom/client";


// const element1=React.createElement("h1",{id:"First",className:"keshav",style:{backgroundColor:"blue",fontSize:"30px"}},"Welcome");
// const element2=React.createElement("p",{style:{backgroundColor:"pink"}},"Kaise ho aap sab, sab kuch theek...");

// const div=React.createElement("div",{},[element1,element2]);

const name="keshav";
const newElement=(
    <>
        <h1>Kaisa ha {name}</h1>
        <h2>Sab kuch theek...</h2>
    </>
)

function greet(){
    return <p>Or bhai sab changa....</p>
}

function garreb(){
    return <span>Me garib hu....</span>
}

const element2=<>{greet()} {garreb()} {newElement}</>

const main=document.getElementById('root');
const root=ReactDOM.createRoot(main);

root.render(element2);