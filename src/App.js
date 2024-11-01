import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const handleSave = (user) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.email === user.email ? user : u)));
      setEditingUser(null);
    } else {
      setUsers([...users, user]);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index); // Elimina el usuario solo en el índice especificado
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <h1>Gestión de Usuarios</h1>
      <UserForm onSave={handleSave} editingUser={editingUser} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
