import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {MdExplore} from "react-icons/md"
import {BsBookmarkDashFill} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"

import "./css/sidebar.css"
import { useForumContext } from '../context/ForumContext'


export function SideBar() {
    const {state}=useForumContext();
    const {name,profileImage,username}=state.profile;
  return (
    <div className='sideBar'>
        <div className="side-navigation">

        
        <ul>
            <li>
                <AiFillHome/><span>Home</span>

            </li>
            <li>
                <MdExplore/><span>Explore</span>

            </li>
            <li>
                <BsBookmarkDashFill/><span>Bookmarks</span>

            </li>
            <li>
                <CgProfile/><span>Profile</span>

            </li>
        </ul>
        </div>

        <div className="profile-section">
                <img src={profileImage} alt="profileImage" />
                <div className="details">
                    <p>{name}</p>
                    <p>@{username}</p>
                </div>
        </div>


      
    </div>
  )
}
