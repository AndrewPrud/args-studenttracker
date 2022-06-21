import React,{useState} from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {

    
    const[enteredUsername, setEnteredUsername] = useState("");
    const[enteredAge, setEnteredAge] = useState("");
    
    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }
    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }
    
    function addUserHandler(event){
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
            return;
        }
        console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }
    return(
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type = "text" id = "username"  value = {enteredUsername} onChange = {usernameChangeHandler} ></input>
                <label htmlFor="age">Age (years)</label>
                <input type = "text"  id = "age"></input>
                <Button type = "submit" onClick = {AddUser} value = {enteredAge} onChange = {ageChangeHandler}>Add User</Button>
            </form>
         </Card>
    );
};

export default AddUser;