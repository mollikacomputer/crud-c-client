import React from 'react';
import {Link} from 'react-router-dom';
const AddUser = () => {

    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email};
        console.log(user);
        event.target.reset();
        // sent data to server side
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            event.target.reset();
        })


    }

    return (
        <div>
            <h2>Add User</h2>
            <ul>
                <li>
                    <Link to="/" >Back to Home</Link>
                </li>
            </ul>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='name' />
                <input type="email" name='email' placeholder='email' />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;