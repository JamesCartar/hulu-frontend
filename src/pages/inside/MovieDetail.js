import React from 'react'
import { useParams } from 'react-router-dom';

function MovieDetail() {
    const params = useParams();
    console.log(params)
  return (
    <div className='text-black'>
      <h1>movie detail</h1>
    </div>
  )
}

export default MovieDetail;
