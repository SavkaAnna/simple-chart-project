import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return(
        <>
        <div className="links">
            <Link to="/form">Form</Link>
            <Link to="/chart">Chart</Link>
        </div>
        </>
    )
}

export default Menu;