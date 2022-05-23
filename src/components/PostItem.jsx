import React from "react";
import "./posts.css";

const PostItem = function(props){
    const {name, title, body} = props;

    return(
        <div className="post">
            <div class = "user-info">
            <img class="profile-picture" src="./profile_picture.png"/>
               <div class = "username">
               <h3>{name}</h3>
           </div>
        </div>
        <h3>{title}</h3>
        <p className="content">{body}</p>
        <div class = "field">
            <img class="com-button" src="./like_button.png" />
            <img class="com-button" src="./dislike_button.png" />
            <img class="com-button" src="./comment_button.png" />
            <img class="com-button" src="./share_button.png" />
        </div>
        </div>
    );
}
export default PostItem;