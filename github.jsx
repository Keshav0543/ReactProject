import React ,{useState,useEffect,useCallback} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Card from "./component/body";

function App() {
    return (
        <>
            <Header />
            <Card/>
        </>
    )
}

const Root = document.getElementById('root');
const main = ReactDOM.createRoot(Root);
main.render(<App />);