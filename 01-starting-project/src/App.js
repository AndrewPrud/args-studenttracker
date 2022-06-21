import React, {useState} from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

function App() {
const[userslist, setUsersList] = useState([]);

function addUserHandler(username, age) {
    const newUser = { name: username, 
      age: age, 
      id: Math.random.toString()
    };
setUsersList((prevUserList) =>{return[...prevUserList, newUser]})
};

  return (
    <div>
<AddUser onAddUser = {addUserHandler}></AddUser>
<UsersList users = {userslist}></UsersList>
    </div>
  );
}

export default App;
