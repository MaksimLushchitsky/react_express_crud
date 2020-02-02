import React from 'react';
import '../App.css';

const UserTable = (props) => {
    const handleDeleteUser = id => {
            props.deleteUser(id)
    };

    return(
        <div className = "wrapper">
            <h2>User Table</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Summa</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {props.users.map(user =>
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.sum}</td>
                        <td>
                            <button className="btn btn-warning btn-sm" onClick={() => {props.editRow(user)}}>edit</button>
                        </td>
                        <td>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(user.id)}>delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

        </div>
    );
};

export default UserTable;
