import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./UserList.css";

const UsersList = (props) => {

    let activeUsers = props.users.filter(user => user.active === true);
    const deleteHandler = (event) => {

    }

    return(
        <Card>
            <ul className="users">
                { activeUsers.map(
                    (user) => 
                        <li key={user.id}> {user.name} ({user.age} years old)
                        <Button clickHandler={deleteHandler} value={user.id}>Delete</Button>
                        </li>
                    )
                }
            </ul>
        </Card>
    );
};

export default UsersList;