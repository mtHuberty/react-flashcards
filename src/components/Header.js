import React from 'react';
import Link from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/flashcards'>Flashcards</Link></li>
                <li><Link to='/add-card'>Add Card</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;