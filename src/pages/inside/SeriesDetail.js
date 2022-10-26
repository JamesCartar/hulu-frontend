import React from 'react'
import { useParams } from 'react-router-dom'

function SeriesDetail() {
    const params = useParams();
    console.log(params)
  return (
    <div className='text-black'>
      <h1>series detail</h1>
    </div>
  )
}

export default SeriesDetail
