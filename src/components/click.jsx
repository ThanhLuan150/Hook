import { useState, useEffect} from 'react'
const Click = () =>{ 
     const [count, setCount] =useState(1) ;
     useEffect(()=>{ 
        console.log(`${ count}`)
        return ()=>{
            console.log(`${count}`)
        }
     },[count])
    return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}> 
        Click me!
    </button>
    </>
    )
}
export default Click;