import React from 'react'

import "./css/home.css"
import { SideBar } from '../components/SideBar'
import { Post } from '../components/Post'
import { useForumContext } from '../context/ForumContext'
import { NavLink, useParams } from 'react-router-dom'
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Comment } from '../components/Comment'

export  function PostDetails() {

    const {postId}=useParams();
    const {state,dispatch}=useForumContext();
    const post=state.posts.find((post)=>post.postId===postId);

    const sortPost=(e)=>{
        console.log("ff")
        dispatch({type:"sort",payload:e.target.value});
    }

  return (
    <div className='home'>
       <div className="homeArea">
        <SideBar/>
       </div>
       <div className="homeArea" style={{backgroundColor:"white"}}>
        <div className="post-head-menu">
           <NavLink to="/"> <AiOutlineArrowLeft/></NavLink>
            <p>Post</p>
           

        </div>
        <Post userPost={post}/>
        
             {
                post.comments.map((comment)=>(
                    <div>
                        {console.log(comment)}
                        <Comment userComment={comment}/>
                    </div>
                ))
            }
       </div>
       <div className="homeArea">
        <h1>Sort By</h1>
        <select className='sortBox' onChange={sortPost}>
            <option value="latest">Latest Post</option>
            <option value="upvotes">Most Voted Post</option>
        </select>
       </div>
      
    </div>
  )
}
