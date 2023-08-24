import { useState } from "react";

function Counter() {
    const [firstCount, setFirstCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0); 
    
    console.log('outside: ' + firstCount)
 


    const addToFirstCount = () => {
        setFirstCount((firstCount) => firstCount + 1)
        setFirstCount((firstCount) => firstCount + 1)
        setFirstCount((firstCount) => firstCount + 1)

        console.log('inside: ' + firstCount)

        // setTimeout(() => { console.log('inside :' + firstCount) }, 5000);    //0      

    }
    // setInterval(addToFirstCount,2000)
    
    const addToSecondCount = () => {
        setSecondCount(pre => pre + 1);
    }
    return (
        <>
            <div>Count 1: {firstCount}</div>
            <button onClick={addToFirstCount}>Add to 1st Count</button>

            <div>Count 2: {secondCount}</div>
            <button onClick={addToSecondCount}>Add to 2nd Count</button>
        </>
    )
}
export default Counter;

