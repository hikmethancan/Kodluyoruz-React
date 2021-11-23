import  {useEffect, useState } from 'react'

function Counter() {

    const [number, setNumber] = useState(0)

    useEffect(()=> {
        console.log("Component Mount Edildi ")
        const interval = setInterval(() => {
            setNumber((n) =>n+1)
        }, 1000);

        return (() => {
            clearInterval(interval)
            console.log("Unmount")

        })
    },[])


    return(
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number +1)}>Click</button>
            <br></br>
            
        </div>
    )
}

export default Counter
