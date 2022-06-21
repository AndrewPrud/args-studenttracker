import React, { useState } from 'react';
import './AddUser.css';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js'

const AddUser = props => {
    function addUserHandler(event){
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
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
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age (years)</label>
            <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    );
};

export default AddUser;