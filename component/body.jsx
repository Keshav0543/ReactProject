import React, { useState, useEffect } from "react";

async function getinfo(setdata, val) {
    let ran=Math.floor(1+Math.random()*10000);
    try{
    const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${val}`);

    if(!response.ok){
        throw new Error(`HTTP:Error Staus:${response.status}`);
    }

    const data = await response.json();
    setdata(data);
    }catch(err){
        alert(err.message);
    }
    
}

async function getuserP(setdata,name){
    try{
    const res=await fetch(`https://api.github.com/users/${name}`);

    if(!res.ok) throw new Error(`HTTP:Error Staus:${res.status}`);

    const data=await res.json();
    setdata([data]);
    }catch(err){
        alert(err.message);
    }
}

function Card() {
    const [data, setdata] = useState([]);
    const [val, setval] = useState("");
    useEffect(() => {
        getinfo(setdata, 10);
    }, []);

 
    function Checkvalid(){
        const trimV=val.trim();
        if(!isNaN(trimV))getinfo(setdata,Number(val));
        else getuserP(setdata,val);
    }

    useEffect(()=>{
        setval("");
    },[data]);


    return (

        <>
            <div className="search-bar">
                <input type="text" placeholder="Enter To Search" value={val} onChange={(e)=>setval(e.target.value)}></input>
                <button onClick={()=>Checkvalid()}>Search Profiles</button>
            </div>

            <div className="wrap">
                {data.map((val) => (
                    <div key={val.id} className="card-container">
                        <div className="image-place">
                            <img src={val.avatar_url} alt={val.login} />
                        </div>

                        <div className="name-info">
                            <h1>{val.login}</h1>
                        </div>

                        <div className="profile-link">
                            <a href={val.html_url} target="_blank">
                                Profile
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}

export default Card;

