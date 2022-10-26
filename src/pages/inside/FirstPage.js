import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { LandingPageContext } from '../../context/landingPage/LandingPageContext';
import Popup from '../../components/partials/Popup';

// icon
import { AiOutlineClose } from 'react-icons/ai';
import { TbPlayerPlay } from 'react-icons/tb';
import { FiPlus } from 'react-icons/fi';
import { context } from '../../context/mainContext';



function FirstPage() {
  const {value: { isShown, popUpText}, openPopup, closePopup} = useContext(context);
  const { genres ,featureMovie, twentyMovies, twentySeries} = useContext(LandingPageContext);
  const [ featureGenres, setFeatureGenres ] = useState([]);
  const [ featureMoiveVideo, setFeatureMovieVideo ] = useState('');

  // console.log(featureMovie.id)
  // setting background image dynamically
  let featureBgImage = featureMovie.backdrop_path ? `linear-gradient(135deg, rgba(35, 20, 55, 0.7) 0%, rgba(44, 56, 94, 0.7) 50%, rgba(51, 110, 107, 0.7) 100%), url(https://image.tmdb.org/t/p/w1280/${ featureMovie.backdrop_path })` 
                                                  : 'linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%)';
  const featureSectionStyle = {
    backgroundImage: featureBgImage,
    backgroundPosition: 'center'
  }

  useEffect(() => {
    let tempFeatureGenres = genres.filter(genre => {
      if(genres) {
        for(let i = 0; i < featureMovie.genre_ids.length; i++) {
          if(featureMovie.genre_ids[i] === genre.id) {
            return genre;
          }
        }
      }
    })
    setFeatureGenres(tempFeatureGenres);

    axios.get(`https://api.themoviedb.org/3/movie/${featureMovie.id}/videos?language=en-US`,{
        params: {
            api_key: 'b38617053052d14c445b6e18cafadda7'
        }
    })
    .then(res => {
      let trailer = res.data.results[0];
      setFeatureMovieVideo(trailer.key);
    })
    .catch(e => console.log(e));

  }, [ featureMovie ]);




  
  let featureMovieGenreEle = featureGenres?.map((genre, index) => {
    return (
      <span key={index}>{genre.name}</span>
    )
  })


  return (
    <div className='bg-gray-300 text-white'>
      <div style={featureSectionStyle} className='w-screen min-h-screen bg-no-repeat bg-cover bg-center flex items-center'>
        <div className='flex flex-col gap-5 max-w-4xl pl-5 pt-16 pr-2'>
          <p className='feature-movie-title text-2xl md:text-3xl  shadow-lg px-2 py-1 mb-3 shadow-slate-400  tracking-widest text-white break-words capitalize'>{featureMovie.title}</p>
          <p className='max-w-full md:max-w-2xl text-gray-300'>{featureMovie.overview?.length > 250 ? featureMovie.overview?.slice(0, 250) + ' ....' : featureMovie.overview}</p>
          <div className='flex gap-4 text-gray-400 text-sm flex-wrap'>
            {featureMovieGenreEle}
          </div>
          <div className='flex gap-2'>
            <button aria-label='open trailer' title='trailer' className='bg-primaryfaded bg-primaryFade px-8 py-2 rounded-2xl' onClick={() => openPopup('featureTrailer')}>{<TbPlayerPlay className='text-2xl' />}</button>
            <button aria-label='add to watch list' title='add watchlist' className='bg-primary px-8 py-2 rounded-2xl'>{<FiPlus className='text-2xl' />}</button>
          </div>
          {
            (isShown && popUpText === 'featureTrailer') &&
            <Popup>
              <div className='popup-inner w-full absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-3'>
                  <button className='close-popup self-center bg-black rounded-full p-3 text-gray-300' aria-label='close login pop up'  onClick={closePopup}>
                    <p className='sr-only'>close trailer pop up</p>
                    <AiOutlineClose className='text-2xl text-gray-300' />
                  </button>
                  <iframe className='text-primary w-11/12 md:w-4/5 h-[28rem] self-center' src={`https://www.youtube.com/embed/${featureMoiveVideo}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div> 
            </Popup>
          }
        </div>
      </div>
    </div>
  )
}

export default FirstPage;
