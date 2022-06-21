import React from 'react';
import './UserList.css';
import Card from '../UI/Card.js';

const UsersList = props => {
    return (
        <Card>
            <ul className="users">
                {props.users.map(
                    user => <li className="users" key = {user.id}>{user.name} ({user.age} years old)</li>

                )

                }
            </ul>
        </Card>
    )
}

export default UsersList;