import React from 'react';
import {useState, useEffect}from 'react';
const UpdateAvatar = () => {
    const[avatar, setAvatar] =useState();
    useEffect(()=>{
        //clear
        return () =>{
           avatar && URL.revokeObjectURL(avatar.preview)
        }// khi mà cập nhật ảnh mới thì dòng code này nó sẽ thực thi xóa dữ liệu của của ảnh trước để hạn chế việc rò rỉ bộ nh
    },[avatar])
    const handleReviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview =URL.createObjectURL(file)
      
        setAvatar(file)
    }

    return (
        <div>
            <input type="file" onChange={handleReviewAvatar} />
            <br></br>
            {avatar  && (
                <img src={avatar.preview} alt='' style={{ width:'80%',height:'100%' }}></img>
            )}
        </div>
    );
}

export default UpdateAvatar;
