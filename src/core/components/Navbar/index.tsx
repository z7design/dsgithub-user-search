import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (

    <nav className="navbar">
        <Link to="/">
            <h4 className="titleNavbar">Bootcamp DevSuperior</h4>
        </Link>
    </nav>
)

export default Navbar;