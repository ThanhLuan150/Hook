import {useRef,useState, useEffect} from 'react'

const UseRef = () =>{
    const [count ,setCount ] =useState(60);

     const ref = useRef(99)// hàm này nó sẽ return thành là môt object đối tượng
     console.log(ref.current);
   //muốn lấy dũ liệu tử useRef thì phải chọc vào carrent thì mới lấy ra được dữ liệu  trong useRef 
    const timeId =useRef();
    const prevCount =useRef();
    useEffect(()=>{
        prevCount.current =count
    },[count])

    const handleStart =() =>{
        timeId.current =setInterval(() =>{
            ref.current = Math.random()
            setCount(prevCount =>prevCount -1)
        },1000)
        console.log('ssd ->', timeId.current)
    }
    const handleStop = ()=>{
        clearInterval(timeId.current)
        console.log('ffsd ->', timeId)
    }

    console.log(count, prevCount.current )
    //Ta phải biết được giá trị hiện tại của State và giá trị trước đó của State
    return(
        <>
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart }>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
        </>
    )
}
export default UseRef;