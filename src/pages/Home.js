import React from 'react'

import "./css/home.css"
import { SideBar } from '../components/SideBar'
import { Post } from '../components/Post'
import { useForumContext } from '../context/ForumContext'

export  function Home() {
    const {state,dispatch}=useForumContext();
    const {posts}=state
    
    const sortPost=(e)=>{
        console.log("ff")
        dispatch({type:"sort",payload:e.target.value});
    }
  return (
    <div className='home'>
       <div className="homeArea">
        <SideBar/>
       </div>
       <div className="homeArea">
        <h1>Latest Post</h1>
        {
            posts.map((post)=>(
                <div key={post.postId}>
                    <Post userPost={post}/>
                </div>
            ))
        }
       </div>
       <div className="homeArea">
        <h1>Sort By</h1>
        <select className='sortBox' onChange={sortPost}>
            <option>Latest Post</option>
            <option>Most Voted Post</option>
        </select>
       </div>
      
    </div>
  )
}
