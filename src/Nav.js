import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        const { isAuthenticated, login, logout } = this.props.auth;
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/public">Public</Link>
                    </li>
                    {isAuthenticated() && (
                    <li>
                        <Link to="/private">Private</Link>
                    </li>
                    )}
                    <li>
                        <button onClick={isAuthenticated() ? logout : login } >
                            {isAuthenticated() ? "Log Out" : "log In"}
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;