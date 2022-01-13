import React, { useState, useEffect } from "react";
import Users from "../components/users";
import User from "../components/user";
import api from "../api";

const UsersList = ({ match, history }) => {
    console.log("MMMatch", match);
    const userId = match.params.userId;
    console.log("userId ", userId);
    return (
        <>{userId ? <User userId={userId} history={history} /> : <Users />}</>
    );
};

export default UsersList;
