import React from 'react';
import {Link} from 'react-router-dom';
const AddUser = () => {
    return (
        <div>
            <h2>Add User</h2>
            <ul>
                <li>
                    <Link to="/" >Back to Home</Link>
                </li>
            </ul>
            <form>
                <input type="text" name='name' placeholder='name' />
                <input type="email" name='email' placeholder='email' />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;