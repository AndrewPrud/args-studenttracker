import React, {useState} from 'react';
import './AddUser.css';
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from '../UI/ErrorModal';
const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();
    function addUserHandler(event) {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;
        }
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
    function errorHandler() {
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal
		title={error.title}
		message={error.message}
		onHandleError={errorHandler}>
	</ErrorModal>}
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number" value = {enteredAge} onChange={ageChangeHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    );
};
export default AddUser; 