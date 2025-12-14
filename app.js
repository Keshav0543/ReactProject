// const element=React.createElement(
//     "div",
//     {style:{backgroundColor:"green",padding:"10px"}},
//     React.createElement("h1",{id:"First",className:"keshav",style:{backgroundColor:"white",fontSize:"30px"}},"Welcome"),
//     React.createElement("p",{},"Kaise ho aap sab, sab kuch theek...")
// )

const element1=React.createElement("h1",{id:"First",className:"keshav",style:{backgroundColor:"blue",fontSize:"30px"}},"Welcome");
const element2=React.createElement("p",{style:{backgroundColor:"pink"}},"Kaise ho aap sab, sab kuch theek...");

const div=React.createElement("div",{},[element1,element2]);

const main=document.getElementById('root');
const root=ReactDOM.createRoot(main);

root.render(div);