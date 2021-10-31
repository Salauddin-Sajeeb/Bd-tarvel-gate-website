import React from 'react';
import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import useAuth from '../../Hooks/UseAuth';

import './header.css'

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
                <Link className="navbar-brand text-white" to="/home">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex align-item-end justify-content-end mt-1" id="navbarNav">
                    <ul className="navbar-nav">

                        {
                            user?.displayName ?
                                <div className="d-flex align-item-end justify-content-end mt-1">
                                    <button onClick={logout}>log out</button>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/myorders">My Orders</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link className="nav-link text-white" to="/adduser">Add Service</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/manage">Manage Orders</Link>
                                    </li>
                                </div>

                                : <NavLink className="nav-link text-white" to="/login">login</NavLink>
                        }


                        <DropdownButton id="dropdown-basic-button" title="User">
                            <Dropdown.Item href="#/action-1">name :{user.displayName}</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Email: {user.email}</Dropdown.Item>

                        </DropdownButton>

                    </ul>
                </div>
            </nav >
        </div >
    );
};

export default Header;