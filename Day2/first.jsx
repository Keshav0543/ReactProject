import React from "react";
import ReactDOM from "react-dom/client";
let x=90;
function Greet(val){
    console.log(val);
    return <h2>Ram Ram Bhaiya ji {val.name} {val.age} {x}</h2>
}

const element1=<Greet name="Keshav" age="23"/>
const element2 = <h1>Hello coder army...</h1>;


const Root = document.getElementById('root');
const access = ReactDOM.createRoot(Root);

access.render(element1);
