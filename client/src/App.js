import React from 'react';
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserTable from "./components/UserTable";
import Summa from "./components/Summa";
import {useEffect} from 'react';
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

function App() {

    const [usersData, setData] = useState([]);

    useEffect(() => {
        const url = "/api/users";

        fetch(url)
            .then(result => result.json())
            .then(response => {
                console.log(response);
                setData(response);
            })
    }, []);

    const [editing, setEditing] = useState(false);
    const initialFormState = {id: null, name: '', username: '', sum: ''};
    const [currentUser, setCurrentUser] = useState(initialFormState);

    const addUser = user => {
        user.id = usersData.length + 1;
        setData([...usersData, user])
    };

    const deleteUser = id => {
        setEditing(false);
        setData(usersData.filter(user => user.id !== id))
    };

    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setData(usersData.map(user => (user.id === id ? updatedUser : user)))
    };

    const editRow = user => {
        setEditing(true);
        setCurrentUser({id: user.id, name: user.name, username: user.username, sum: user.sum})
    };

    if (!usersData) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                <div className="flex-row">
                    <div className="flex-large">
                        {editing ? (
                            <div>
                                <h2>Edit user</h2>
                                <EditUserForm
                                    editing={editing}
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    updateUser={updateUser}
                                />
                            </div>
                        ) : (
                            <div>
                                <AddUserForm addUser={addUser}/>
                            </div>
                        )}
                    </div>
                    <div className="flex-large">
                        <UserTable users={usersData} editRow={editRow} deleteUser={deleteUser}/>
                    </div>
                    <div className="flex-large">
                        <Summa users={usersData}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
