import { createContext, useContext, useReducer } from "react";
import { PostData } from "../data/PostData";
import { ForumReducer } from "../reducer/ForumReducer";

export const ForumContext=createContext();

export const ForumProvider=({children})=>{
    const [state,dispatch]=useReducer(ForumReducer,{
        posts:[...PostData.posts],
        profile:{accountId:PostData.accountId,name:PostData.name,username:PostData.username,profileImage:PostData.picUrl}
    })

    return(
        <ForumContext.Provider value={{state,dispatch}}>
            {children}
        </ForumContext.Provider>
    )

}

export const useForumContext=()=>useContext(ForumContext);