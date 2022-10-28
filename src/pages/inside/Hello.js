import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Hello() {
    
  
  const navigate = useNavigate();

    useEffect(() => {
        const reload = () => {
            navigate('/home');
        };
        reload();
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default Hello
