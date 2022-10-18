import React, { useContext, useEffect, useState } from 'react';
import { LandingPageContext } from '../../context/landingPage/LandingPageContext';

// icon

import { TbPlayerPlay } from 'react-icons/tb';
import { FiPlus } from 'react-icons/fi';



function FirstPage() {
  const { genres ,featureMovie, twentyMovies, twentySeries} = useContext(LandingPageContext);
  const [ featureGenres, setFeatureGenres ] = useState([]);
  
  // setting background image dynamically
  let featureBgImage = featureMovie.backdrop_path ? `linear-gradient(135deg, rgba(35, 20, 55, 0.7) 0%, rgba(44, 56, 94, 0.7) 50%, rgba(51, 110, 107, 0.7) 100%), url(https://image.tmdb.org/t/p/w1280/${ featureMovie.backdrop_path })` 
                                                  : 'linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%)';
  const featureSectionStyle = {
    backgroundImage: featureBgImage,
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

    setFeatureGenres(tempFeatureGenres)

  }, [ featureMovie ]);

  console.log(featureMovie)



  
  let featureMovieGenreEle = featureGenres?.map((genre, index) => {
    return (
      <span key={index}>{genre.name}</span>
    )
  })

  return (
    <div className='bg-gray-300 text-white'>
      <div style={featureSectionStyle} className='w-screen min-h-screen bg-no-repeat bg-cover bg-center flex items-center'>
        <div className='flex flex-col gap-3 max-w-4xl pl-5 pt-16 pr-2'>
          <p className='text-3xl uppercase font-serif drop-shadow-xl tracking-widest'>{featureMovie.title}</p>
          <p className='max-w-full md:max-w-2xl text-gray-300'>{featureMovie.overview}</p>
          <div className='flex gap-4 text-gray-400'>
            {featureMovieGenreEle}
          </div>
          <div className=''>
            <button aria-label='open trailer' className='bg-primaryfaded bg-primaryFade p-1'>{<TbPlayerPlay className='text-2xl' />}</button>
            <button aria-label='add to watch list' className='bg-primary p-1'>{<FiPlus className='text-2xl' />}</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default FirstPage;
