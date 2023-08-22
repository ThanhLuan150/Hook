import { useState } from "react";
const Mounted =()=>{
    const [show, setShow] =useState(false);
    
    return(
        <>
        <button onClick={()=>setShow(!show)}>Show</button>
       {show && <h1>Lê Trương Thành Luân</h1>}

        </>
    )
}
export default Mounted;