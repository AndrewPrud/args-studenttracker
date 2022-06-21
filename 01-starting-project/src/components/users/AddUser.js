import React,{useState} from "react";
import "./AddUser.css"
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddUser = props => {
const[enteredUsername, setEnteredUsername] = useState("");
const[enteredAge, setEnteredAge] = useState("");

function addUserHandler(event){
event.preventDefault();

if(enteredUsername.trim().length === 0 || enteredAge === 0){
    return;
}

if(+enteredAge < 1) {
    return;
    
}

console.log(enteredUsername,enteredAge);
props.onAddUser(enteredUsername,enteredAge);
setEnteredUsername("");
setEnteredAge("");
}

function usernameChangeHandler (event){

    setEnteredUsername(event.target.value);
    
}

function ageChangeHandler (event){

    setEnteredAge(event.target.value);
    
}


    return(
   <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
                <input type = "text" id = "username"  value = {enteredUsername} onChange = {usernameChangeHandler} ></input>
            <label htmlFor="age">Age     (years)</label>
                <input type = "text"  id = "age" value = {enteredAge} onChange = {ageChangeHandler}></input>
                    <Button type = "submit" onClick = {AddUser}  >Add User</Button>
        </form>
   </Card>
    
    );
};

export default AddUser;