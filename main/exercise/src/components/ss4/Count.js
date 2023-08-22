import { useState } from "react";

function Counter (){
    const [firstCount,setFirstCount] = useState(0);
    const [secondCount,setSecondCount] = useState(0);

    return (
        <>
        <div>Count 1: {firstCount}</div>
        <button onClick={() => {setFirstCount(firstCount+1)}}>Add to 1st Count</button>

        <div>Count 2: {secondCount}</div>
        <button onClick={() => {setSecondCount(secondCount+1)}}>Add to 2nd Count</button>
        </>
    )
}
export default Counter;

