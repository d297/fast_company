import React from "react";
import Main from "../layouts/main";
import Login from "../layouts/login";
import Users from "../layouts/users";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <ul class="nav">
                <li class="nav-item">
                    <Link to="/" class="nav-link">
                        Main
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/login" class="nav-link">
                        Login
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/users" class="nav-link">
                        Users
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default NavBar;
