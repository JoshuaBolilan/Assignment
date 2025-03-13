import React, { useEffect, useState } from "react";
import axios from "axios";


const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/users")
            .then(response => {
                setUsers(response.data); // Store users from API
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
