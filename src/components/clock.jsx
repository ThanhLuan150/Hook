import { useState ,useEffect} from "react";
const Clock =()=>{
 const [countdown,SetCountdown] =useState(10000000);
    useEffect(()=>{
        setInterval(()=>{
            SetCountdown(prevState => prevState -1)
        },100)
    },[])
    return(
    <>
    <div>{countdown}</div>
    </>
    )
}
export default Clock;