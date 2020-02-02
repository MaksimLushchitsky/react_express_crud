import React, {useState} from 'react';
import '../App.css';

const AddUserForm = props => {
    const initialFormState = {id: null, name: '', username: '', sum: ''};
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.currentTarget;
        setUser({...user, [name]: value})
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!user.name || !user.username || !user.sum) return

        props.addUser(user);
        setUser(initialFormState)
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
            <button className="btn btn-success btn-sm col-2">Add new user</button>
        </form>
    )
};

export default AddUserForm;