import React, { useState } from 'react'

import {BiSolidUpArrow} from "react-icons/bi"
import {BiSolidDownArrow} from "react-icons/bi"
import {BsDot} from "react-icons/bs"
import {BiComment} from "react-icons/bi"
import {BiShareAlt} from "react-icons/bi"
import {BsBookmark} from "react-icons/bs"
import {BsFillBookmarkCheckFill} from "react-icons/bs"

import "./css/post.css"
import { useForumContext } from '../context/ForumContext'
import { NavLink } from 'react-router-dom'

export  function Post({userPost}){
    const {postId,downvotes,upvotes,picUrl,post,postDescription,username,tags,isBookmarked}=userPost;
    const votes=upvotes-downvotes;


    const {dispatch}=useForumContext();

    const upVoteHandler=()=>{
        dispatch({type:"upVote",payload:postId});
        
    }
    const downVoteHandler=()=>{
        dispatch({type:"downVote",payload:postId});

    }

    const toggleBoomark=()=>{
        dispatch({type:"toggleBoomark",payload:postId})
    }


  return (
    <div className='post'>  
        <div className="votes">
           <BiSolidUpArrow onClick={upVoteHandler} style={{cursor:"pointer",  color:votes>0?"inherit":"gray"}}/>
            <span>{upvotes-downvotes}</span>
           <BiSolidDownArrow  onClick={downVoteHandler} style={{cursor:"pointer", color:votes<0?"inherit":"gray"}}/>
        </div>
        <div className="post-details">
        <div className="post-head">
            <img src={picUrl}    alt="profile" />
            <span>Posted By  @{username} </span><span><BsDot/></span><span>1m</span>
        </div>
        <div className="post-content">
            <h1>{post}</h1>
            <div className="tags">
                {
                    tags.map((tag)=>(
                        <span>{tag}</span>
                    ))
                }
            </div>
            <p>{postDescription}</p>
            <div className="line"></div>
            
        </div>
        <div className="postBtn">
                <NavLink to={`/post/${postId}`}><span><BiComment/></span></NavLink>
                <span><BiShareAlt/></span>
                <span>{!isBookmarked?<BsBookmark onClick={toggleBoomark}/>:<BsFillBookmarkCheckFill onClick={toggleBoomark}/>}</span>
            </div>


        </div>
        
      
    </div>
  )
}
