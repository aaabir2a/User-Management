// src/features/users/AddUser.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';

const AddUser = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: Date.now(), name }));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add new user"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
