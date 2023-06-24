import React, { useState } from 'react'

import {BiCommentAdd, BiSolidUpArrow} from "react-icons/bi"
import {BiSolidDownArrow} from "react-icons/bi"
import {BsDot} from "react-icons/bs"
import {BiComment} from "react-icons/bi"
import {BiShareAlt} from "react-icons/bi"
import {BsBookmark} from "react-icons/bs"
import {BsFillBookmarkCheckFill} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"

import "./css/post.css"
import { useForumContext } from '../context/ForumContext'
import { NavLink } from 'react-router-dom'

export  function Comment({userComment}){
    const {commentId,picUrl,comment,username,ceatedAt}=userComment;



  return (
    <div className='post'>  
        <div className="post-details">
        <div className="post-head">
            <img src={picUrl}    alt="profile" />
            <span>Posted By  @{username} </span><span><BsDot/></span><span>1m</span>
            <span>Replying to  @{"tanay protap"} </span><span><BsDot/></span><span>1m</span>
        </div>
        <div className="post-content">
            <p>{comment}</p>

            
        </div>
        <div className="postBtn">
            <span><AiOutlineHeart/></span>
            <span><BiCommentAdd/></span>
                <span><BiShareAlt/></span>
            </div>


        </div>
        
      
    </div>
  )
}
