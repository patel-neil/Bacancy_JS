// 2. **useEffect + cleanup**
    
//     Create a component that starts a `setInterval` when it mounts, 
// updates a counter every second, and clears the interval in a `useEffect` cleanup. 
// Unmount the component (e.g. toggle with a button) and confirm the 
// interval stops (no console errors or extra ticks).

import { useState, useEffect, use } from "react";

function Task2()
{
    const [count, setCount] = useState(0);

    useEffect(() => {
        const result = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(result);
        }
    },[])

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    );
}

export default Task2;