import React from "react";
import "./users.css";

class UserItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            status:'friend',
        }
    }
    render(){
        const {name, email, salary} = this.props;
        return(
            this.state.status == "friend" ?
            <div className="user-card">
                <img className="profile-img" src="./profile_picture.png"/>
                <div className="section">
                    <h1>{ name }</h1><br></br>
                    <h4>{ email }</h4>
                    <p>{ salary }</p><br></br>
                    <button className="unfriend" onClick={(event)=>{this.unfriend(event)}}>Unfriend</button>
                </div>
            </div> : null
        );
    }

    unfriend(event){
        this.setState({status:"NO_friend"})
    }
}
/*
const UserItem = function(props){
}
*/
export default UserItem;