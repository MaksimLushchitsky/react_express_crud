import React, {useState} from 'react';
import {useEffect} from 'react';

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    );

    const handleInputChange = event => {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!user.name || !user.username || !user.sum) return
        props.updateUser(user.id, user)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                className="form-control"
            />
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
                className="form-control"
            />
            <label>Summa</label>
            <input
                type="text"
                name="sum"
                value={user.sum}
                onChange={handleInputChange}
                className="form-control"
            />
            <button className="btn btn-success">Update user</button>
            <button
                onClick={() => props.setEditing(false)}
                className="btn btn-danger"
            >
                Cancel
            </button>
        </form>
    )
};

export default EditUserForm;