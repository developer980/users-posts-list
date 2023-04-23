import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component{
    render(){
        const { users } = this.props;

        return (
            <div className="user-list">
            {users.map((user, index) =>
            {
                return(
                    <UserItem 
                    name={user.name} 
                    email={user.email} />
               );
            })}
           {/* div></div> */}
           </div>
        );

    }
}
export default UserList;