import React from "react";
import Card from "../UI/Card";
import "./UserList.css";

const UsersList = props => {

    return(

        <Card>
                    <ul className = "users">
                       { props.users.map(
                            user => 
                                <li> {user.name} ({user.age} years old)</li>
                       )
                       }

                    </ul>



        </Card>

    );
};

export default UsersList;