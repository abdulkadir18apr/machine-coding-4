export const ForumReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case "upVote":
    
            return{
                ...state,posts:[...state.posts.map((post)=>post.postId===payload?{...post,upvotes:post.upvotes+1}:post)]
            }
        case "downVote":
            return{
                ...state,posts:[...state.posts.map((post)=>post.postId===payload?{...post,upvotes:post.upvotes-1}:post)]
            }
        case "toggleBoomark":
            console.log(payload)
            return {
                ...state,posts:[...state.posts.map((post)=>post.postId===payload?{...post,isBookmarked:!post.isBookmarked}:post)]
            }
        case "sort":
            let updatedPost=[]
            if(payload==="latest"){
                updatedPost=state.posts.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
            }
            else{
                updatedPost=state.posts.sort((a,b)=>b.upvotes-a.upvotes)
            }
            console.log(updatedPost);
            return {
                ...state,posts:[...updatedPost]
            }
        default:
            return state
    }
}