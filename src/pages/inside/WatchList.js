import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { twentyScreenPlay } from '../../context/landingPage/ApiCalls';
import WatchListFeature from '../../services/watchList';

// icons
import { AiOutlineClose } from 'react-icons/ai';
import { SyncLoader } from 'react-spinners';
 
import { LandingPageContext } from '../../context/landingPage/LandingPageContext';
import { context } from '../../context/mainContext';
import Navbar from './Navbar';

function WatchList() {
  const { handleDeleteAWatchList, handleClearWatchList } = useContext(LandingPageContext);
  const { value: { user } } = useContext(context);

  const [ movieList, setMovieList ] = useState([]);
  const [ tvList, setTvList ] = useState([]);
  const [ currentTab, setCurrentTab ] = useState('movies');
  const [ isLoading, setIsLoading ] = useState('true');



  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    let watchList = WatchListFeature.GetWatchList();
    watchList.then((res) => {
        setMovieList(res.data.watchList.movieList.reverse())
        setTvList(res.data.watchList.tvList.reverse());
        if(movieList.length < 1 && tvList.length > 0) {
          setCurrentTab('tv')
        }
    
    }).catch(e => console.log(e));

    movieListEl = renderList(movieList);
    tvListEl = renderList(tvList);

  }, [ currentTab, isLoading, movieList, tvList ]);


  const deleteAWatchList = (id, type) => {
    handleDeleteAWatchList(id);

    let watchList = WatchListFeature.GetWatchList();
    watchList.then((res) => {
      if(type === 'movie') {
          setMovieList(res.data.watchList.movieList.reverse())
      } else { 
          setTvList(res.data.watchList.tvList.reverse());
      }
      
      movieListEl = renderList(movieList);
      tvListEl = renderList(tvList);
    }).catch(e => console.log(e))
  }

  const clearWatchList = (user_id) => {
    console.log(user_id)
    handleClearWatchList(user_id)
  }

  const changeTab = (e) => {
    if(e.target.id === 'movies') {
      setCurrentTab('movies');
    } else {
      setCurrentTab('tv');
    }
  }
  
  function renderList (list) {
    return list?.map((screenPlay, index) => (
      <div key={index} className='flex sm:flex-row flex-col border border-neutral-300 rounded-xl my-4 shadow-lg'>
        <img className='w-full sm:w-40 object-cover rounded-xl rounded-b-none sm:rounded-br-none sm:rounded-r-none' src={`https://image.tmdb.org/t/p/w342${ screenPlay.poster }`} />
        <div className='p-3 flex flex-col w-full'>
          <h3 className='text-lg'>{screenPlay.title}</h3>
          <span className='text-sm text-slate-400'>{screenPlay.releaseDate}</span>
          <p className='mb-2 text-sm mt-4'>{screenPlay.overView}</p> 
          <button onClick={() => deleteAWatchList(screenPlay._id, screenPlay.type)} className='mt-2 sm:mt-auto w-full bg-red-600 rounded-sm text-center flex justify-center items-center gap-1 py-2'>
            <AiOutlineClose className='rounded-full border border-white text-lg text-white' />
            <span className='text-white'>Remove</span>
          </button>
        </div>
      </div>
    ))
  }
  let movieListEl = renderList(movieList);
  let tvListEl = renderList(tvList);

  

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
      <div className='text-black bg-no-repeat bg-cover bg-center'>
          <Navbar />
          { 
            movieList.length < 1 && tvList.length < 1 ?
            <h1 className='text-center mt-28 text-xl sm:text-3xl'>You have not added anything to your list !</h1>
            :
            <div className='mt-16 p-5'>
              <div className='flex flex-wrap items-baseline gap-5 mb-4 w-full'>
                <p className='md:text-3xl font-bold'>My Watchlist</p>
                <div className='flex gap-5'>
                  <button onClick={changeTab} className={`${movieList?.length < 1 ? 'pointer-events-none' : 'cursor-pointer'} ${currentTab === 'movies' && 'border-b-2 border-black'}`} id='movies'>Movies <span className='text-primary ml-1'>{movieList ? movieList.length : ''}</span></button>
                  <button onClick={changeTab} className={`${tvList?.length < 1 ? 'pointer-events-none' : 'cursor-pointer'} ${currentTab === 'tv' && 'border-b-2 border-black'}` } id='tv'>Tv <span className='text-primary ml-1'>{tvList ? tvList.length : ''}</span></button>
                </div>
                <button onClick={() => clearWatchList(user._id)} className='text-white bg-red-700 block mx-auto sm:ml-auto md:mr-2 px-2 py-1 rounded-md'>Clear List</button>
              </div>
              <div className={currentTab === 'movies' ? 'win' : 'mar'} >
                { currentTab === 'movies' ? movieListEl : tvListEl } 
              </div>
            </div>
          }
      </div>
  )
}

export default WatchList;
