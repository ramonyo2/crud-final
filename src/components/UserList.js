import React from 'react';
import './UserList.css';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list-container">
      <h2 className="user-list-title">Lista de Usuarios</h2>
      {users.length === 0 ? (
        <p>No hay usuarios para mostrar.</p>
      ) : (
        <ul className="user-list">
          {users.map((user, index) => (
            <li key={index} className="user-item">
              <span className="user-info">{`${user.name} - ${user.email} - ${user.age} años`}</span>
              <div className="user-actions">
                <button onClick={() => onEdit(user)}>Editar</button>
                <button onClick={() => onDelete(index)}>Eliminar</button> {/* Pasa el índice del usuario */}
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="total-users">Total de Usuarios: {users.length}</p>
    </div>
  );
};

export default UserList;
