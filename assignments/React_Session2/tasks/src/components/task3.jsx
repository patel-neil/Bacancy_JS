// 3. **useEffect dependency**
    
//Build a small “user by ID” viewer: one state for `userId`, one for `user`. 
// Use `useEffect` to fetch when `userId` changes. Include cleanup so that if the request finishes 
// after `userId` changed or the component unmounted, you don’t call `setUser`.

import React, { useEffect, useState } from "react";

function Task3()
{
    const [userid, setUserid] = useState(1);
    const [user, setUser] = useState(null);

    useEffect(() => {
        let active = true;
        fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
        .then((res) => res.json())
        .then((data) => {
            if(active)
            {
                setUser(data);
            }
        })

        return () => {
            active = false;
        }
    }, [userid]);

    return(
        <div>
            <h1>User ID: {userid}</h1>
            <button onClick={() => setUserid((prev) => prev + 1)}>Next User</button>
            <h2>Name: {user?.name}</h2>
            <h3>Email: {user?.email}</h3>
        </div>
    )
}

export default Task3;