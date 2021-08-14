import React from 'react';
import { links } from './data';


function Navbar() {
    return (
        <nav className="nav-header">
            <div className="nav-center">
                <div className="links-container">
                    <ul className="links">
                    {links.map((link) => {
                    const { id, url, text } = link;
                    return (
                        <li key={id}>
                        <a href={url}>{text}</a>
                        </li>
                    )
                    })}
                    </ul>
            </div>
        </div>
        </nav>
    )
}
export default Navbar
