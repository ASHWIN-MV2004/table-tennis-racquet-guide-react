import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Table Tennis Racquet Guide for Beginners</h1>
            <nav>
                <ul>
                    <li><Link to="/">Overview</Link></li>
                    <li><Link to="/types">Types of Racquets</Link></li>
                    <li><Link to="/recommendations">Recommendations</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;