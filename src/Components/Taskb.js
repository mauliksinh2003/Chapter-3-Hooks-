import React, { useState, useEffect } from 'react';

function Taskb(){

    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then((json) => setUser(json));
     
    });

    return(
        <div>
        <h1 style={{textAlign : "center"}}>Task B</h1>
        {
            user.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                </div>
            ))
        }
        </div>
    )
}

export default Taskb;