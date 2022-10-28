import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';
import { LandingPageContext } from '../../context/landingPage/LandingPageContext';
import { context } from '../../context/mainContext';
import Popup from '../../components/partials/Popup';


// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { Link } from 'react-router-dom';

// icon
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

// image
import trendingBackground  from '../../images/trending-bg.jpg';

function SecondPage() {
  
  const {value: { isShown, popUpText}, openPopup, closePopup} = useContext(context);
  const { 
    twentyPopularMovies,
    twentyPopularSeries, 
    twentyLatestMovies, 
    twentyLatestSeries, 
    twentyMovieTrailerList, 
    twentySeriesTrailerList
  } = useContext(LandingPageContext);
  const [ activePopularScreenPlayTab, setActivePopularScreenPlayTab ] = useState('popularSeries');
  const [ activeScreenPlayTrailerTab, setActiveScreenPlayTrailerTab ] = useState('moviesTrailer');
  const [ activeLatestScreenPlayTab, setActiveLatestScreenPlayTab ] = useState('latestSeries');
  
  const [ currentTrailerBackgorund,  setcurrentTrailerBackgorund ] = useState('');
  const [ currentTrailerId, setCurrentTrailerId ] = useState('');
  const [ currentTrailer, setCurrentTrailer ] = useState(''); 

  const popularScreenPlay = {
    popularMovies: twentyPopularMovies,
    popularSeries: twentyPopularSeries,
  }
  const latestScreenPlay = {
    latestMovies: twentyLatestMovies,
    latestSeries: twentyLatestSeries,
  }
  const screenPlayTrailer = {
    moviesTrailer: twentyMovieTrailerList,
    seriesTrailer: twentySeriesTrailerList,
  }


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${activeScreenPlayTrailerTab.includes('movie') ? 'movie' : 'tv'}/${currentTrailerId}/videos?language=en-US`,{
        params: {
            api_key: 'b38617053052d14c445b6e18cafadda7'
        }
    })
    .then(res => {
      let trailer = res.data.results[0];
      setCurrentTrailer(trailer.key);
    })
    .catch(e => console.log(e));
  }, [ currentTrailerId ])

  
  let popularScreenPlayEl = renderScreenPlayElement(popularScreenPlay, activePopularScreenPlayTab, activePopularScreenPlayTab);
  let latestScreenPlayEl = renderScreenPlayElement(latestScreenPlay, activeLatestScreenPlayTab, activeLatestScreenPlayTab);
  let screenPlayTrailerEl = renderScreenPlayElement(screenPlayTrailer, activeScreenPlayTrailerTab);

  function openTrailerPopUp(screenPlayId) {
    openPopup('screenPlayTrailer');
    setCurrentTrailerId(screenPlayId);
  };
  
  const changeTab = (e) => {
    if(e.target.id === 'popularMovies') {
      setActivePopularScreenPlayTab('popularMovies');
    } else if(e.target.id === 'popularSeries') {
      setActivePopularScreenPlayTab('popularSeries');
    } else if(e.target.id === 'seriesTrailer') {
      setActiveScreenPlayTrailerTab('seriesTrailer');
    } else if(e.target.id === 'movieTrailer') {
      setActiveScreenPlayTrailerTab('moviesTrailer');
    } else if(e.target.id === 'latestMovies') {
      setActiveLatestScreenPlayTab('latestMovies');
    } else if(e.target.id === 'latestSeries') {
      setActiveLatestScreenPlayTab('latestSeries');
    }
  };

  function mouseOver(screenPlay) {
    setcurrentTrailerBackgorund(screenPlay.backdrop_path);
  }

  const trailerSectionstyle = {
    backgroundImage: `linear-gradient(135deg, rgba(35, 20, 55, 0.7) 0%, rgba(44, 56, 94, 0.7) 50%, rgba(51, 110, 107, 0.7) 100%), 
                  url(https://image.tmdb.org/t/p/w1280${currentTrailerBackgorund})`
  }


  function renderScreenPlayElement(screenPlayObj, screenPlayTab, activeScreenPlayTab) {
    return screenPlayObj[screenPlayTab]?.map((screenPlay, index) => {
      return (
      <SwiperSlide className='flex items-center justify-center' key={index}>
        {
          !screenPlayTab.includes('Trailer') ? (
            <Link to={`${activeScreenPlayTab.includes('Movies') ? 'movies' : 'series'}/${screenPlay.id}`}>
              <div>
                <img className='block object-cover object-top w-64 rounded-lg' 
                    src={`https://image.tmdb.org/t/p/w342${ screenPlay.poster_path }`} 
                    alt={`${screenPlay.original_title || screenPlay.name} poster`} 
                />
                <p className=' text-xs md:text-base pt-2 tracking-widest mt-2'>{screenPlay.original_title || screenPlay.name}</p>
                <p className='text-xxs mt-1 text-gray-400'>{screenPlay.first_air_date || screenPlay.release_date}</p>
              </div>
            </Link>
          ) : (
            <div>
              <div className='relative cursor-pointer' onClick={() => openTrailerPopUp(screenPlay.id)} onMouseOver={() => mouseOver(screenPlay)} >
                <img className='block object-cover object-top w-80 rounded-lg' 
                    src={`https://image.tmdb.org/t/p/w342${ screenPlay.backdrop_path }`} 
                    alt={`${screenPlay.original_title || screenPlay.name} poster`} 
                />
                <BsPlayFill className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-primary' />
              </div>
              <p className='text-white text-xs md:text-base pt-2 tracking-widest mt-2'>{screenPlay.original_title || screenPlay.name}</p>
            </div>
          )
        }
      </SwiperSlide> 
    )});
  }
  

  return (
    <div className='bg-[#163246] text-white secondPage'>
      <div className='inside-slider p-5 sm:py-10 bg-contain bg-no-repeat bg-white bg-center text-black'  style={{backgroundImage: `url(${trendingBackground})`}}>
        <div className='flex align-center flex-col sm:flex-row'>
          <span className='text-xl pr-5 py-2 sm:text-start text-center font-bold'>What's Popular</span>
          <div className='relative flex rounded-full border border-black w-max sm:mx-0 mx-auto sm:mt-0 mt-3'>
            <span onClick={changeTab} id='popularSeries' className={`cursor-pointer ${activePopularScreenPlayTab === 'popularSeries' ? 'text-primary bg-[#032541]' : ''} rounded-full px-4 py-2`}>On Tv</span>
            <span onClick={changeTab} id='popularMovies' className={`cursor-pointer ${activePopularScreenPlayTab === 'popularMovies' ? 'text-primary bg-[#032541]' : ''} rounded-full px-4 py-2`}>In Theaters</span>
          </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          slidesPerGroup={2}
          loop={false}
          loopFillGroupWithBlank={false}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper text-[#032541] mt-6 TrailerSwiper ${activePopularScreenPlayTab === 'popularMovies' ? 'win' : 'mar'}`}
          breakpoints={{
              320: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20
              },
              480: {
                  slidesPerView: 4,
                  slidesPerGroup: 2,
                  spaceBetween: 20
              },
              830: {
                  slidesPerView: 6,
                  slidesPerGroup: 4,
                  spaceBetween: 30
              }
          }}
        > 
          { popularScreenPlayEl }
        </Swiper>              
      </div>
      <div className='inside-slider tralier-slider relative p-5 sm:py-10 bg-cover bg-no-repeat bg-top' style={trailerSectionstyle}>
        <div className='flex align-center flex-col sm:flex-row'>
          <span className='text-xl pr-5 py-2 sm:text-start text-center font-bold'>Latest Trailers</span>
          <div className='relative flex rounded-full border border-white w-max sm:mx-0 mx-auto sm:mt-0 mt-3'>
            <span onClick={changeTab} id='seriesTrailer' className={`cursor-pointer ${activeScreenPlayTrailerTab === 'seriesTrailer' ? 'text-primary bg-white' : ''} rounded-full px-4 py-2`}>On Tv</span>
            <span onClick={changeTab} id='movieTrailer' className={`cursor-pointer ${activeScreenPlayTrailerTab === 'moviesTrailer' ? 'text-primary bg-white' : ''} rounded-full px-4 py-2`}>In Theaters</span>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={false}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper mt-6 popularSwiper ${activeScreenPlayTrailerTab === 'moviesTrailer' ? 'win' : 'mar' }`}
          breakpoints={{
              320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 10
              },
              480: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20
              },
              830: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 30
              }
          }}
        > 
          { screenPlayTrailerEl }
        </Swiper>
        {
          (isShown && popUpText === 'screenPlayTrailer') &&
          <Popup>
            <div className='popup-inner w-full absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-3'>
                <button className='close-popup self-center bg-black rounded-full p-3 text-gray-300' aria-label='close trailer pop up' onClick={closePopup}>
                  <p className='sr-only'>close trailer pop up</p>
                  <AiOutlineClose className='text-2xl text-gray-300' />
                </button>
                <iframe className='text-primary w-11/12 md:w-4/5 h-[28rem] self-center' src={`https://www.youtube.com/embed/${currentTrailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div> 
          </Popup>
        }             
      </div>
      <div className='inside-slider p-5 sm:py-10'>
        <div className='flex align-center flex-col sm:flex-row'>
          <span className='text-xl pr-5 py-2 sm:text-start text-center font-bold'>What's Trending</span>
          <div className='relative flex rounded-full border border-white w-max sm:mx-0 mx-auto sm:mt-0 mt-3'>
            <span onClick={changeTab} id='latestSeries' className={`cursor-pointer ${activeLatestScreenPlayTab === 'latestSeries' ? 'text-primary bg-white' : ''} rounded-full px-4 py-2`}>On Tv</span>
            <span onClick={changeTab} id='latestMovies' className={`cursor-pointer ${activeLatestScreenPlayTab === 'latestMovies' ? 'text-primary bg-white' : ''} rounded-full px-4 py-2`}>In Theaters</span>
          </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          slidesPerGroup={2}
          loop={false}
          loopFillGroupWithBlank={false}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper mt-6 TrailerSwiper ${activeLatestScreenPlayTab === 'latestMovies' ? 'win' : 'mar'}`}
          breakpoints={{
              320: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20
              },
              480: {
                  slidesPerView: 4,
                  slidesPerGroup: 2,
                  spaceBetween: 20
              },
              830: {
                  slidesPerView: 6,
                  slidesPerGroup: 4,
                  spaceBetween: 30
              }
          }}
        > 
          { latestScreenPlayEl }
        </Swiper>              
      </div>
    </div>
  )
}

export default SecondPage;
