import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../assets/nav_links.js';

const Navbar = ({ containerStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            {NAV_LINKS.map((link) => (
                <NavLink
                    key={link.title}
                    to={link.path}
                    className={({ isActive }) => isActive ? "active-link" : "px-3 py-2 rounded-full"}>
                    <div className='flexCenter gap-x-1'>{link.title}</div>
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar;
