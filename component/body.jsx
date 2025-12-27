import React, { useState, useEffect } from "react";

async function getinfo(setdata) {
    const response = await fetch("https://api.github.com/users?per_page=10");
    const data = await response.json();
    setdata(data);
}

function Card() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        getinfo(setdata);
    }, []);


    return (
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
    );
}

export default Card;
