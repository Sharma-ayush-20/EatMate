import { useState } from "react";

const User = () => {
    const [count, setCount] = useState(0);

    const incrementValue = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={incrementValue}>Increment</button>
                <h2>Hi Everyone, this is swiggy clone built using ReactJS</h2>
            </div>
        </>
    )
}

export default User;