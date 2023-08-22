import { useState } from "react";

const UserInfor = ()=>{
    const [info ,setInfor] =useState(
       {
        name:'Luân',
        age:20,
        address:'Tây Vinh, Tây Sơn ,Bình Định'
       }
    );
    const handleUpdate= ()=>{
       setInfor({
        ...info, //... nó sẽ sap chép và cập nhật lại giá trị mới cỉu như nó sẽ giữ lại những phần tử cũ và thêm những phần tủ khác vô 
        name:'Loan Lê',
        age:55,
        address:'Bình Định'
       }) 
    }
    return(
        <>
        <div>{JSON.stringify(info)}</div>
        <button onClick={ handleUpdate}>Nhấn vào</button>
        </>
    )
}
export default UserInfor;