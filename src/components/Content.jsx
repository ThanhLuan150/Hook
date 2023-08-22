import { useEffect, useState } from "react";

//1.CallBack luôn được gọi sau khi component mouted
//-Gọi callBank mỗi khi component re-render
//-Gọi callback sau khi component thêm element vào Dom
//1.useEffect (callback)chỉ có callBack thôi nó sẽ hoạt động như thế nào.
//2.useEffect(callback,[])mảng rỗng hoạt động như thế nào.
 //3.useEffect(callback, [deps]) nó sẽ hoạt động như thế nào.
 //sizeEffect
const Content = () =>{
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

            //cleanup function nó sẽ dọn dẹp bộ nhớ của ta khi unmount tránh rò rõ rĩ bộ nhớ hoặc khi unmount nó vẫn chạy chức năng đó
            return ()=>{
                window.addEventListener('scroll',handleScroll)
            }
    },[])
    console.log(showGoToTop)
    return(
    <>
    <div>
        {posts.map(post =>(
            <div >{post.title}</div>
                
        ))}
        {showGoToTop && (
            <button style={{
                 position:'fixed',
                 right:'20px',
                 bottom:'20px',
    
            }}>Go to Top</button>
        )}
    </div>
    </>
    )
}
export default Content;