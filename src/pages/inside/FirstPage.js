import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { LandingPageContext } from '../../context/landingPage/LandingPageContext';
import Popup from '../../components/partials/Popup';

// icon
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';



function FirstPage() {
  const { state, handleAddToWatchList, handleOpenPopup, handleClosePopup } = useContext(LandingPageContext);

  
  const [ featureGenres, setFeatureGenres ] = useState([]);
  const [ featureMoiveVideo, setFeatureMovieVideo ] = useState('');
  const [ alertMessage, setAlertMessage ] = useState('');
  const [ isMessageShown, setIsMessageShown ] = useState(false);

  // style
  let featureBgImage = state.featureMovie.backdrop_path ? `linear-gradient(135deg, rgba(35, 20, 55, 0.7) 0%, rgba(44, 56, 94, 0.7) 50%, rgba(51, 110, 107, 0.7) 100%), url(https://image.tmdb.org/t/p/w1280/${ state.featureMovie.backdrop_path })` 
                                                  : 'linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%)';
  const featureSectionStyle = {
    backgroundImage: featureBgImage,
    backgroundPosition: 'center'
  }


  // hook
  useEffect(() => {


    let tempFeatureGenres = state.genres.filter(genre => {
      if(state.genres) {
        for(let i = 0; i < state.featureMovie.genre_ids.length; i++) {
          if(state.featureMovie.genre_ids[i] === genre.id) {
            return genre;
          }
        }
      }
    })
    setFeatureGenres(tempFeatureGenres);

    axios.get(`https://api.themoviedb.org/3/movie/${state.featureMovie.id}/videos?language=en-US`,{
        params: {
            api_key: 'b38617053052d14c445b6e18cafadda7'
        }
    })
    .then(res => {
      let trailer = res.data.results[0];
      setFeatureMovieVideo(trailer.key);
    })
    .catch(e => console.log(e));
  }, [ ]);

  const handleClick = () => {
    const user_id = state.user._id;
    const poster = state.featureMovie.poster_path;
    const title = state.featureMovie.original_title;
    const releaseDate = state.featureMovie.release_date.split('-').reverse().join(', ');
    const overView = state.featureMovie.overview;
    const type = 'movie';
    
    handleAddToWatchList({
      user_id,
      poster,
      title,
      releaseDate,
      overView,
      type
    })
    .then(res => {
      setAlertMessage(res.data.msg);
      setIsMessageShown(true);

      setTimeout(() => {
        setIsMessageShown(false);
      }, 3000);
    })
    .catch(e => console.log(e));
  };
  
  // render element by mapping
  let featureMovieGenreEle = featureGenres?.map((genre, index) => {
    return (
      <span key={index}>{genre.name}</span>
    )
  });


  return (
    <div  style={featureSectionStyle} className='bg-gray-300 text-white bg-no-repeat bg-cover bg-center relative'>
      { alertMessage && isMessageShown && ( 
          <div className='bg-primary flex justify-center items-center gap-2 w-max mx-auto fixed top-20 left-1/2 transform -translate-x-1/2 z-50 p-2 px-3 rounded-lg'>
            <IoMdCheckmarkCircleOutline className='text-2xl'/>
            <p className='text-sm'>{alertMessage}</p>
          </div>
      ) }
      <div className='gap-5 max-w-4xl pl-5 pt-16 pr-2 w-screen flex items-start justify-center flex-col '>
        <p className='feature-movie-title text-2xl md:text-3xl shadow-lg px-2 py-1 mt-10 mb-3 shadow-slate-400  tracking-widest text-white break-words capitalize'>{state.featureMovie.title}</p>
        <p className='max-w-full md:max-w-2xl text-gray-300'>{state.featureMovie.overview?.length > 250 ? state.featureMovie.overview?.slice(0, 250) + ' ....' : state.featureMovie.overview}</p>
        <div className='flex gap-4 text-gray-400 text-sm flex-wrap'>
          {featureMovieGenreEle}
        </div>
        <div className='flex gap-2 mb-10'>
          <button aria-label='open trailer' title='trailer' className='bg-primary p-2 px-4 rounded-full flex items-center' onClick={() => handleOpenPopup('featureTrailer')}><BsFillPlayFill className='text-lg' /> <span className='uppercase text-sm'>Trailer</span></button>
          <button  onClick={handleClick} aria-label='add to watch list' title='add watchlist' className='bg-white text-primary p-2 px-4 rounded-full flex items-center gap-1'><FiPlus className='text-lg' /> <span className=' uppercase text-sm text-gray-800'>Add List</span></button>
        </div>
        {
          (state.isShown && state.popUpText === 'featureTrailer') &&
          <Popup>
            <div className='popup-inner w-full absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-3'>
                <button className='close-popup self-center bg-black rounded-full p-3 text-gray-300' aria-label='close login pop up'  onClick={handleClosePopup}>
                  <p className='sr-only'>close trailer pop up</p>
                  <AiOutlineClose className='text-2xl text-gray-300' />
                </button>
                <iframe className='text-primary w-11/12 md:w-4/5 h-[28rem] self-center' src={`https://www.youtube.com/embed/${featureMoiveVideo}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div> 
          </Popup>
        }
      </div>
    </div>
  )
}

export default FirstPage;
