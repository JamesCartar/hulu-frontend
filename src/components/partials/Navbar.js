import React, { useContext } from 'react'
import { context } from '../../context/mainContext';

function Navbar(props) {
    const {openPopup} = useContext(context);
    
    return (
        <nav aria-label='navbar' className="text-primary flex justify-between items-center h-16">
            {props.children}
        </nav>
    );
}

export default Navbar;
