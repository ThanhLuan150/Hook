import { useState } from "react";

const Input = ()=>{
    //Reponse từ api thôi đemo
    const list1=[
        {
            id:1,
            fullname:'Lê Trương Thành Luân'
        },
        {
            id:2,
            fullname:'Hồ Thị Thu Trân'
        },
        {
            id:3,
            fullname:'Nguyễn Văn Nhật'
        },
        {
            id:4,
            fullname:'Hồ Thị Loan'
        },
        {
            id:5,
            fullname:'Hồ Thị Duyệt'
        },
    ]

    const [checked, setChecked] =useState();
    // const [name, setName] =useState('');
    // const [email, setEmail]=useState('');

    const HandleSbubmit = ()=>{
        console.log({id:checked})
    }
  const handleCheck = (id)=>{
        setChecked(prev =>[...prev, id ] )//Khi ta check thì sẽ một cái mảng chứa id
  }

   // input là dùng onchange để lấy dữ liệu được nhập vào ô input
   //checkbox có thể chọn nhiều nếu muốn chọn nhiều thì ta phải lưu vô mảng
    return(
        <>
         <div>
            {/* <input onChange={e => setName(e.target.value)} value={name}></input>
            <input onChange={e => setEmail(e.target.value)} value={email}></input> */}
            {list1.map(list =>(
                <div key={list.id}>
                    <input type="radio" checked ={checked ===list.id} onChange={()=> setChecked(list.id)}></input>
                    {list.fullname}
                </div>
            ))}
            <button onClick={HandleSbubmit}>Register</button>
         </div>

         <div>
            {/* <input onChange={e => setName(e.target.value)} value={name}></input>
            <input onChange={e => setEmail(e.target.value)} value={email}></input> */}
            {list1.map(list =>(
                <div key={list.id}>
                    <input type="checkbox" checked ={checked ===list.id} onChange={()=>handleCheck(list.id)}></input>
                    {list.fullname}
                </div>
            ))}
            <button onClick={HandleSbubmit}>Register</button>
         </div>
        </>
    )
}
export default Input;