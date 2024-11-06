// src/App.jsx
import React from 'react';
import UserList from './features/users/UserList';
import AddUser from './features/users/AddUser';

const App = () => (
  <div>
    <h1>User Management</h1>
    <AddUser />
    <UserList />
  </div>
);

export default App;
