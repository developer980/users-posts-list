import React from "react";
import PostItem from "./PostItem";

class PostList extends React.Component{
    render(){
    const {posts} = this.props;
    return (

        posts.map((post, index)=>
        {
            return(
                <div>
                    <PostItem name = {"user_" + index} title = {post.title}
                     body = {post.body}/>
                     <br></br>
                </div>
            );
        })
    );
    }
}
export default PostList;