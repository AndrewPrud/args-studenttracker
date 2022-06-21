import React, {useState} from 'react';
import AddUser from './components/users/AddUser.js';
import UsersList from './components/users/UsersList.js';

function App() {
  const[usersList, setUsersList] = useState([]);
  function addUserHandler(username, age){
    const newUser = {
      name : username,
      age : age,
      id : Math.random().toString(),
      active : true,
    };
    setUsersList((prevUserList) => {return [...prevUserList, newUser];})
    }; 
  function deleteUserHandler(userID){
      const userIndex = usersList.findIndex(user => user.id === userID)
      const updatedUsers = [...usersList];
      updatedUsers[userIndex].active = false;
      setUsersList(updatedUsers);
    }
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}></AddUser>
      <UsersList users= {usersList} deleteUser = {deleteUserHandler}></UsersList>
    </div>
  );
  }

export default App;
