import { useState } from "react";

const List =()=>{
    const list = [
        'CPU 19G',
        'Ram 32GB RGB',
        'RGB Keyboard'
    ]
    const [gift, setGift] =useState()
    const randomGift = ()=>{
        const index = Math.floor(Math.random() *list.length)
        setGift(list[index]);
    } 
    return(
        <>
        <h1>
           {gift || 'Chưa có phần thưởng'}
        </h1>
        <button onClick={randomGift}>Lẩy thưởng</button>
        </>
    )
}
export default List;