import React, { useState } from 'react';
import './AddUser.css';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js'
import ErrorModal from '../UI/ErrorModal.js';

const AddUser = props => {
    const[error, setError] = useState();
    function addUserHandler(event){
        event.preventDefault();
        if(+enteredAge < 1){
            setError({
                title: "Invalid input.",
                message: "Age cannot be zero or negative."

            });
            setEnteredUsername("");
            setEnteredAge("");
            return;
        }
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid input.",
                message: "Enter a valid name and age."
            });
            setEnteredUsername("");
            setEnteredAge("");
            return;
        }
        console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }

    function errorHandler(){
        setError(null);
    }
    const[enteredUsername, setEnteredUsername] = useState("");
    function usernameChangeHandler(event){
        setEnteredUsername(event.target.value);
    }
    const[enteredAge, setEnteredAge] = useState("");
    function ageChangeHandler(event){
        setEnteredAge(event.target.value);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onHandleError={errorHandler}></ErrorModal>}
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age (years)</label>
            <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    );
};

export default AddUser;