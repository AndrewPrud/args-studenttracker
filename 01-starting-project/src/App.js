import React, {useState} from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

function App() {
const[userslist, setUsersList] = useState([]);

function addUserHandler(username, age) {
    const newUser = { name: username, 
      age: age, 
      id: Math.random.toString(),
      active: true,
    };

  
setUsersList((prevUserList) =>{return[...prevUserList, newUser];})
};
function deleteUserHandler(userId){
  const userIndex = userslist.findIndex(user => user.id === userId);
  const updatedUsers = [...userslist];
  updatedUsers[userIndex].active = false;
  setUsersList(updatedUsers);
}
  return (
    <div>
<AddUser onAddUser = {addUserHandler}></AddUser>
<UsersList users = {userslist} deleteUser = {deleteUserHandler}></UsersList>
    </div>
  );
}

export default App;
