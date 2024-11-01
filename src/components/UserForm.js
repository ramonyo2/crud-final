import React, { useState, useEffect } from 'react';
import './UserForm.css'; // Importa el archivo CSS

const UserForm = ({ onSave, editingUser }) => {
  const [user, setUser] = useState({ name: '', email: '', age: '' });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
    setUser({ name: '', email: '', age: '' });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Edad"
        value={user.age}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingUser ? 'Actualizar' : 'Agregar'} Usuario</button>
    </form>
  );
};

export default UserForm;
