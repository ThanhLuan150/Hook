import { useEffect, useState } from "react";

//1.CallBack luôn được gọi sau khi component mouted
//-Gọi callBank mỗi khi component re-render
//-Gọi callback sau khi component thêm element vào Dom
//1.useEffect (callback)chỉ có callBack thôi nó sẽ hoạt động như thế nào.
//2.useEffect(callback,[])mảng rỗng hoạt động như thế nào.
 //3.useEffect(callback, [deps]) nó sẽ hoạt động như thế nào.
 //sizeEffect
const Content = () =>{
    const tabs =['posts','comments']
    const [title, setTitle ] =useState('');
    const [posts, setPosts] =useState([]);
    const [showGoToTop ,setShowGoToTop] =useState(false);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(posts =>{
            setPosts(posts);
        })
    },[])

    useEffect(()=>{
        const  handleScroll =()=>{
            if(window.scrollY >=200){
                setShowGoToTop(true)

            }else{
                setShowGoToTop(false)
            }
        }
            window.addEventListener('scroll',handleScroll)
    },[])
    return(
    <>
    <div>
        <input  value={title} onChange={e =>setTitle(e.target.value)}>
        </input>
        {posts.map(post =>(
            <div >{post.title}</div>
                
        ))}
        {showGoToTop && (
            <button style={{
                 position:'fixed',
                right:'20',
                bottom:'20'
    
            }}>Go to Top</button>
        )}
    </div>
    </>
    )
}
export default Content;