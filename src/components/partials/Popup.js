import React from 'react'

function Popup(props) {

  return (
    <div className='popup fixed w-full min-h-full bg-lightBg top-0 left-0 text-black overflow-x-hidden overflow-y-scroll z-50'>
        {props.children}
    </div>
  );
}

export default Popup;
