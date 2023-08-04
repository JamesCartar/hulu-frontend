import React, { useContext } from 'react';

function Navbar(props) {
    
    return (
        <nav aria-label='navbar' className="text-primary flex justify-between items-center h-16">
            {props.children}
        </nav>
    );
}

export default Navbar;
