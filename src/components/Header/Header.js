import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="contianer">
            <a href="/logo">Logo</a>
            <div className="info-container">
                <a href="./home">Home</a>
                <a href="./archive">Archive</a>
                <a href="/meals">Meals</a>
                <a href="/pricing">Pricing</a>
            </div>
        </div>
    );
};

export default Header;