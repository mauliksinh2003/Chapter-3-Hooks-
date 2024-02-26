import React, { useReducer } from "react";

const value = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state
    };
}

function Taskd() {
    const [count, dispatch] = useReducer(reducer, value)

    return(
        <>
        <div style={{textAlign : "center" }}>
            <h1>Task D</h1>
            <br></br>
            <h1>{count}</h1>
            <br></br>
            
            <button onClick={()=>dispatch("increment")}>Increse</button>
            <button onClick={()=>dispatch("decrement")}>Decrese</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>
        </div>
        </>
    )
}

export default Taskd;