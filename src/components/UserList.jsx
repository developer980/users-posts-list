import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component{
    render(){
        const { users } = this.props;

        return(
            users.map((user, index) =>
            {
                return(
                    <div className="user-list">
                        <UserItem 
                          name={user.name} 
                          email={user.email} />
                     <br></br>
                    </div> 
               );
            })
           /* <div></div>*/
        );

    }
}
export default UserList;