import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => userId !== user._id));
    };

    const handleToogleBookMark = (id) => {
        const updateList = users.map((user) => {
            if (user._id === id) {
                user.bookmark = !user.bookmark;
            }
            return user;
        });
        setUsers(updateList);
    };

    //
    const updateCountUsers = (usersLength) => {
        setUsers(usersLength);
    };

    return (
        <div>
            <Users
                users={users}
                usersLength={users.length}
                onDelete={handleDelete}
                onToogleBookMark={handleToogleBookMark}
                updateCountUsers={updateCountUsers}
            />
        </div>
    );
}

export default App;
