import { useState } from "react";
const Tong = () =>{
    const orders =[100,200,300]
    const [counter, setCounter ] =useState(()=>{
      const total =orders.reduce((total,cur) => total+cur)
      return total;
    });//callback nó sẽ tạo một function chy thẳng trong usetate đó luôn và gòi hàm này một lần duy nhất trong lần đầu khởi tạo
    const handleNhanvao =()=>{
      setCounter (prevState =>prevState+1) //PreState là giá trị ban đầu
      setCounter (prevState =>prevState+1) //PreState là giá trị ban đầu
      setCounter (prevState =>prevState+1) //PreState là giá trị ban đầu 
      //Chạy một lần duy nhất nhưng nó sẽ gọp lại chạy một lần dùng callBack
    }
    return(
        <> <h1>{counter}</h1>
        <button onClick={handleNhanvao}>Nhấn vào </button></>
    )
}
export default Tong;