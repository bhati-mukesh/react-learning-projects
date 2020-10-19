import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props)=> {
    return (
        <div>
            <nav className="nav shadow fix-top navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        ContactBook
                    </a>
                    <div>
                        <Link to="/add" className="btn btn-light ml-auto">Create Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;