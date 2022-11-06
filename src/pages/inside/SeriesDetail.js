import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createRoutesFromChildren, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import Navbar from './Navbar';

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

// icon
import { SyncLoader } from 'react-spinners';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

import Popup from '../../components/partials/Popup';
import { useContext } from 'react';
import { context } from '../../context/mainContext';
import { LandingPageContext } from '../../context/landingPage/LandingPageContext';


function SeriesDetail() {
    const params = useParams();
    const {value: { isShown, popUpText, user}, openPopup, closePopup} = useContext(context);
    const { handleAddToWatchList } = useContext(LandingPageContext);

    

    const [currentSeries, setCurrentSeries] = useState([]);
    const [currentSeriesCredits, setCurrentSeriesCredits] = useState([]);
    const [currentSeriesTrailer, setCurrentSeriesTrailer] = useState('');
    const [ alertMessage, setAlertMessage ] = useState('');
    const [ isMessageShown, setIsMessageShown ] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    let categories = [];
    let creators = [];
    let writers = [];
    let casts = [];
    
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000);

      // fetching current movie
      axios.get(`https://api.themoviedb.org/3/tv/${params.id}?language=en-US`,{
          params: {
              api_key: 'b38617053052d14c445b6e18cafadda7'
          }
      })
      .then(res => {
        let seriesDetails = res.data;
        setCurrentSeries(seriesDetails);
      })
      .catch(e => console.log(e));

      // fetching the credits of current movie
      axios.get(`https://api.themoviedb.org/3/tv/${params.id}/credits?language=en-US`,{
          params: {
              api_key: 'b38617053052d14c445b6e18cafadda7'
          }
      })
      .then(res => {
        let seriesCredits = res.data;
        setCurrentSeriesCredits(seriesCredits);
      })
      .catch(e => console.log(e));

      // fetching the trailer of current movie
      axios.get(`https://api.themoviedb.org/3/tv/${params.id}/videos?language=en-US`,{
        params: {
            api_key: 'b38617053052d14c445b6e18cafadda7'
        }
      })
      .then(res => {
        let trailer = res.data.results[0];
        setCurrentSeriesTrailer(trailer.key);
      })
      .catch(e => console.log(e));

    }, [ params.id ]);
    
    if(currentSeries.genres) {
      for(let genre of currentSeries.genres) {
        categories.push(genre.name)
      }
    }
    
    if(currentSeries.created_by) {
      for(let creator of currentSeries.created_by) {
        creators.push(creator.name)
      }
    }

    if(currentSeriesCredits.cast) {
      for(let cast of currentSeriesCredits.cast) {
        if(cast.known_for_department === 'Acting' && cast.profile_path) {
          casts.push(cast)
        }
      }
    }

    
    if(currentSeriesCredits.crew) {
      for(let cast of currentSeriesCredits.crew) {
        if(cast.known_for_department === 'Writing') {
          writers.push(cast.name)
        }
      }
    }

    let movieCastEl = casts?.map((cast, index) => (
      <SwiperSlide className='text-white h-full relative' key={index}>
        <img alt={`${cast.name}`} className='w-full rounded-t-xl' src={`http://image.tmdb.org/t/p/original${cast.profile_path}`} />
        <p className='flex flex-col absolute bottom-0 left-0 w-full p-1' style={{background: 'rgba(0, 0, 0, 0.6)'}}>
          <span className='text-sm'>{cast.name}</span>
          <span className='text-xs text-slate-300'>{cast.character}</span>
        </p>
      </SwiperSlide>
    ))


    const handleClick = () => {
      const user_id = user._id;
      const poster = currentSeries.poster_path;
      const title = currentSeries.name;
      const releaseDate = currentSeries.first_air_date.split('-').reverse().join(', ');
      const overView = currentSeries.overview;
      const type = 'tv';

      
      handleAddToWatchList({
        user_id,
        poster,
        title,
        releaseDate,
        overView,
        type,
      })
      .then(res => {
        setAlertMessage(res.data.msg);
        setIsMessageShown(true);

        setTimeout(() => {
          setIsMessageShown(false);
        }, 3000);
      })
      .catch(e => console.log(e));
    }


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
      <div className='text-white min-h-screen pt-5 bg-no-repeat bg-cover bg-center flex flex-wrap md:flex-nowrap items-end justify-between overflow-x-hidden relative' style={{'backgroundImage': `linear-gradient(135deg, rgba(35, 20, 55, 0.7) 0%, rgba(44, 56, 94, 0.7) 50%, rgba(51, 110, 107, 0.7) 100%), url(https://image.tmdb.org/t/p/w1280/${ currentSeries.backdrop_path })`}}>
        <Navbar />
        { alertMessage && isMessageShown && (
          <div className='bg-primary flex justify-center items-center gap-2 w-max mx-auto absolute top-20 left-1/2 transform -translate-x-1/2 z-50 p-2 px-3 rounded-lg'>
            <IoMdCheckmarkCircleOutline className='text-2xl'/>
            <p className='text-sm'>{alertMessage}</p>
          </div>
          )
        } 
        <div className='w-full md:w-2/4 mt-16'>
          <div className='p-5 sm:pl-10'>
            <h1 className='text-3xl sm:text-5xl mb-5'>{currentSeries.original_name}</h1>
            <div className='flex flex-col gap-2'>
              {
              currentSeries.episode_run_time && currentSeries.episode_run_time.length > 0  &&
                <p className='flex justify-between w-60'>
                <span>Run Time : </span>
                <span>{currentSeries.episode_run_time} min</span>
              </p>
              }
              {<p className='flex justify-between w-60'>
                <span>Status : </span> 
                <span>{currentSeries.status}</span>
              </p>}
              {
              currentSeries.first_air_date &&
                <p className='flex justify-between w-60'>
                <span>First Air Date : </span>
                <span>{currentSeries.first_air_date.split('-').reverse().join(', ')}</span>
                </p>
              }
              {
              currentSeries.number_of_seasons > 0 &&
                <p className='flex justify-between w-60'>
                  <span>Total Season : </span>
                  <span>{currentSeries.number_of_seasons}</span>
                </p>
              }
              {
              currentSeries.tagline && 
                <p>
                  {currentSeries.tagline}
                </p>
              }
            </div>
            <div className='flex gap-5 mb-10 mt-5'>
              <button aria-label='open trailer' title='trailer' className='bg-primaryfaded bg-primary p-2 px-4 rounded-full flex items-center' onClick={() => openPopup('currentSeriesTrailer')}><BsFillPlayFill className='text-lg' /> <span className='uppercase text-sm'>Trailer</span></button>
              <button aria-label='add to watch list' title='add watchlist' className='bg-white text-primary p-2 px-4 rounded-full flex items-center gap-1' onClick={handleClick}><FiPlus className='text-lg' /> <span className=' uppercase text-sm text-gray-800'>Add List</span></button>
            </div>
          </div>
          <div className='flex p-3 gap-3 sm:gap-1 sm:p-8 flex-wrap sm:flex-nowrap rounded-tr-3xl' style={{background: 'rgba(0, 0, 0, 0.4)'}}>
            <div className='flex flex-col gap-2 sm:w-72'>
              <div>
                <p className='uppercase text-base text-primary tracking-wider'>Category</p>
                <p className='text-sm text-gray-300 mt-1'>{categories.join(', ')}</p>
              </div>
              <div>
                <p className='uppercase text-base text-primary tracking-wider mb-1'>Creator & Writers</p>
                <p>
                  <span className='text-sm text-gray-100 tracking-wider'>Creator : </span>
                  <span className='text-sm text-gray-300 mt-1'>{creators}</span>
                </p>
                <p>
                  <span className='text-sm text-gray-100 tracking-wider'>Writers : </span>
                  <span className='text-sm text-gray-300 mt-1'>{writers[0]}</span>
                </p>
              </div>
            </div>
            <div className='w-full flex flex-col gap-2'>
              <div>
                <p className='uppercase text-base text-primary tracking-wider'>Storyline</p>
                <p className='text-sm text-gray-300 mt-1'>{currentSeries.overview}</p>
              </div>
              {/* <div>
                <p className='uppercase text-base text-primary tracking-wider'>Home Page</p>
                <p className='text-sm text-gray-300'>{currentSeries.homepage}</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className='w-screen p-3 md:p-0 md:w-5/12 md:pr-2'>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            slidesPerGroup={2}
            loop={false}
            loopFillGroupWithBlank={false}
            navigation={true}
            modules={[Navigation]}
            className={`text-[#032541] mySwiper cast-swiper rounded-xl`}
            breakpoints={{
                380: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 10
                },
                590: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 10
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20
                },
                1000: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 10
                }
            }}
          > 
            { movieCastEl }
          </Swiper>
        </div>
        {
          (isShown && popUpText === 'currentSeriesTrailer') &&
          <Popup>
            <div className='popup-inner w-full absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-3'>
                <button className='close-popup self-center bg-black rounded-full p-3 text-gray-300' aria-label='close login pop up'  onClick={closePopup}>
                  <p className='sr-only'>close trailer pop up</p>
                  <AiOutlineClose className='text-2xl text-gray-300' />
                </button>
                <iframe className='text-primary w-11/12 md:w-4/5 h-[28rem] self-center' src={`https://www.youtube.com/embed/${currentSeriesTrailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div> 
          </Popup>
        }
      </div>
  )
}

export default SeriesDetail;
