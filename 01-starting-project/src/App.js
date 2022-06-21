import React, { useState } from 'react';
import AddUser from './components/users/AddUser.js';
import UsersList from './components/users/UsersList.js';

function App() {
  const[usersList, setUsersList] = useState([]);
  function addUserHandler(username, age){
    const newUser = {
      name: username,
      age: age,
      id: Math.random().toString()
    };
    setUsersList((prevUserList) => {
      return[...prevUserList, newUser];
    }
    )
  };
  return (
    <div>
      <AddUser></AddUser>
      <UsersList users = {usersList}></UsersList>
    </div>
  );
};

export default App;
