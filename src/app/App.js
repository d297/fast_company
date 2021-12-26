import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
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

    return (
        <div>
            <SearchStatus length={users.length} />
            <Users
                users={users}
                usersLength={users.length}
                onDelete={handleDelete}
                onToogleBookMark={handleToogleBookMark}
            />
        </div>
    );
}

export default App;
