import React, {useState} from 'react';
import './AddUser.css';
import Card from '../UI/Card.js'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal.js';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const[error, setError] = useState();
    
    function addUserHandler(event){
        
        // prevents page from reloading
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return(
            setError({
                title: "invlid input", 
                message : "enter a valid name"
             })
            )
        };
        // + makes it read like a value
        if(+enteredAge < 1){
            return(
            setError({
                title : "invalid age",
                message : "enter an age > 1"
            })
            )
        };
        console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }
   
    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }
    
    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }

    function errorHandler(){
        setError(null);
    }
    return(
    <div>
       {error && <ErrorModal title = {error.title} message = {error.message} onHandleError = {errorHandler}> </ErrorModal> }
      <Card>
        <form onSubmit = {addUserHandler}> 
            <label htmlFor="username" >Username</label>
            <input type = "text" id = "username" value = {enteredUsername} onChange = {usernameChangeHandler} ></input>
            <label htmlFor="age">Age (years)</label>
            <input type = "number" id = "age" value = {enteredAge} onChange = {ageChangeHandler} ></input>
            <Button type = "submit">Add User</Button>
        </form>
        </Card>
    </div>
    );
};

export default AddUser;