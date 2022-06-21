import React,{useState} from "react";
import "./AddUser.css"
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = props => {
const[enteredUsername, setEnteredUsername] = useState("");
const[enteredAge, setEnteredAge] = useState("");
const[error, setError] = useState("");

function addUserHandler(event){
event.preventDefault();

if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
    setError({title: "Invalid Input", message: " Enter Valid Name and Age",});
    return;
}

if(+enteredAge < 1) {
    setError({title: "Invalid Age", message: "Enter Age Greater than 0",});
    return;
    
}

console.log(enteredUsername,enteredAge);
props.onAddUser(enteredUsername,enteredAge);
setEnteredUsername("");
setEnteredAge("");
}

function errorHandler(){
    setError(null);
}

function usernameChangeHandler (event){

    setEnteredUsername(event.target.value);
    
}

function ageChangeHandler (event){

    setEnteredAge(event.target.value);
    
}


    return(
    
<div>

    {error && <ErrorModal title={error.title} message = {error.message} onHandleError={errorHandler}></ErrorModal>}
   <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
                <input type = "text" id = "username"  value = {enteredUsername} onChange = {usernameChangeHandler} ></input>
            <label htmlFor="age">Age     (years)</label>
                <input type = "text"  id = "age" value = {enteredAge} onChange = {ageChangeHandler}></input>
                    <Button type = "submit" onClick = {AddUser}  >Add User</Button>
        </form>
   </Card>

</div>
    
    );
};

export default AddUser;