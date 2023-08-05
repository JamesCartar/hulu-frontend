import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

import { LandingPageContext } from '../../context/landingPage/LandingPageContext';
import Navbar from './Navbar';

function PopularMovie() {
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ pageCount, setPageCount ] = useState(3);
  const [ loadMore, setLoadMore ] = useState(false);

  const {dispatch, isFetching } = useContext(LandingPageContext);

  console.log(isFetching)
  
  
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

    

    function detectPageBottom() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setPageCount(preNum => preNum + 1)
      }
    }

    
    if(loadMore) {
      window.addEventListener('scroll', detectPageBottom);
    }

    
    if(!isLoading || loadMore) {
      axios.get(`https://api.themoviedb.org/3/movie/popular?page=${pageCount}`,{
          params: {
              api_key: 'b38617053052d14c445b6e18cafadda7'
          }
      })
      .then(res => {
        let data = res.data.results;
        setPopularMovies(oldMovies => ([ ...oldMovies, ...data ]));
      })
      .catch(e => console.log(e));
    }

    return () => window.removeEventListener('scroll', detectPageBottom);

  }, [ isLoading, pageCount, loadMore ]);

  function handleLoadMore() {
    setLoadMore(true);
    setPageCount(preNum => preNum + 1);
  }


  let popularMovieEl = popularMovies?.map((movie) => (
    <div className='col-span-1'>
      <Link to={`/home/movies/${movie.id}`}>
        <img className='text-primary w-full' src={`https://image.tmdb.org/t/p/w342${ movie.poster_path }`} />
      </Link>
    </div>
  ))



  return (
    isLoading ?
    <div style={{backgroundImage: 'linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%)'}} className='w-screen min-h-screen flex justify-center items-center overflow-hidden'>
      <SyncLoader
        className=''
        color="#1ce783"
        size={20}
        speedMultiplier={1}
      />
    </div>
    :
    <>
      <Navbar />
      <div className='mt-20 gap-3 content-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center min-h-screen'>
        { popularMovieEl }
      </div>
      <button onClick={handleLoadMore} className='text-primary bg-[#082541] w-1/2 py-3 mx-auto my-4 block hover:text-[#082541] hover:bg-primary'>Load More</button>
    </>
  )
}

export default PopularMovie;
