import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import { context } from '../../context/mainContext';
import Popup from '../../components/partials/Popup';


function SecondPage() {
    const [similarScreenPlayById, setSimilarScreenPlayById] = useState([]);
    const [currentScreenPlay, setCurrentScreenPlay] = useState({});
    const [sliceNumber, setSliceNumber] = useState(8);

    const {value, openPopup, closePopup} = useContext(context);


    function handleClick(e) {
        let currentElement = e.target;
        let clickedScreenPlayId = currentElement.getAttribute('data-id');

        fetch(`https://api.themoviedb.org/3/movie/${clickedScreenPlayId}/similar?api_key=b38617053052d14c445b6e18cafadda7&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setSimilarScreenPlayById(data.results));
            setCurrentScreenPlay(value.twoMovieNTwoTv.find((screenPlay) => {
                return screenPlay.id === Number(clickedScreenPlayId)
            }));
        openPopup('screenPlay');
    }


    const twoMovieNTwoTvCard = value.twoMovieNTwoTv.map((screenPlay) => (
        <div className='relative' key={screenPlay.id}>
            <img className='opacity-70 max-h-[28.125rem] cursor-pointer' 
                onClick={handleClick} data-id={screenPlay.id} 
                src={`https://image.tmdb.org/t/p/w500${screenPlay.poster_path}`}
                alt={`${screenPlay.original_title} poster`}
            />
            <div className='absolute top-4 left-4 sm:top-7 sm:left-7 flex flex-col items-start justify-start text-left gap-2 tracking-wider'>
                <span className='text-xs'>{screenPlay.type}</span>
                <span className='text-lg'>{screenPlay.movieOrTv}</span>
            </div>
        </div>
    ));

    const similarIdScreenPlayCard = similarScreenPlayById?.map((screenplay, index) => (
        <SwiperSlide className='flex items-center justify-center' key={index}>
            <div>
                <img className='block object-cover object-top w-56 h-32 rounded-lg' 
                    src={`https://image.tmdb.org/t/p/w342${screenplay.backdrop_path}`} 
                    alt={`${screenplay.original_title} poster`} 
                />
                <p className='text-xs sm:text-base pt-2 tracking-wider'>{screenplay.original_title}</p>
            </div>
        </SwiperSlide>
    ));


    const similarTypeScreenPlayCard = value[currentScreenPlay.streamPlace]?.slice(0, sliceNumber).map((screenPlay) => (
        <div className='mx-auto'>
            <img className='block object-cover object-top w-56 h-32 rounded-lg' 
                src={`https://image.tmdb.org/t/p/w342${screenPlay.backdrop_path}`} 
                alt={`${screenPlay.original_title} poster`} 
            />
            <p className='text-xs sm:text-base pt-2 tracking-wider'>{screenPlay.original_title || screenPlay.original_name}</p>
        </div>
    ))
    
    const changeSliceNumber = () => {
        if(sliceNumber > 10) {
            setSliceNumber(8)
        } else {
            setSliceNumber(20)
        }
    }

    

    return (
        <div className='bg-darkBg py-20 text-center relative'>
            <div className='flex flex-col gap-7 max-w-3xl mx-auto px-5'>
                <h3 className='text-2xl sm:text-5xl font-black'>All The TV You Love</h3>
                <h4 className='text-primary uppercase text-sm font-medium -order-1'>included in all plans</h4>
                <p>Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</p>
            </div>
            
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 px-5 mt-12'>
                {twoMovieNTwoTvCard}
            </div>
            {(value.isShown && value.popUpText === 'screenPlay') && (
                <Popup>
                    <div className='text-white text-left h-96 w-screen sm:w-[40rem] md:w-[50rem] mx-auto'>
                        <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${currentScreenPlay.backdrop_path})`}} className='h-96 w-full flex flex-col justify-between bg-no-repeat bg-center bg-cover relative'>
                            <header className='py-5 bg-lightBg'>
                                <p className='text-xl text-center'>{currentScreenPlay.movieOrTv}</p>
                                <button className='close-popup absolute right-6 top-3' aria-label='close screen play pop up' onClick={() => closePopup()}>
                                    <AiOutlineClose className='text-3xl text-slate-500' />
                                </button>
                            </header>
                            <main className='bg-lightBg px-4 py-5 flex flex-col gap-4'>
                                <h3 className='text-3xl font-bold font-sans'>{currentScreenPlay.movieOrTv}</h3>
                                <p className='text-sm font-sans'>
                                    {currentScreenPlay.movieOrTv === 'TV Shows' ? 
                                    'Watch past seasons of exclusive shows, current-season episodes the day after they air, 40+ acclaimed series from FX, classic favorites, and tons more.'
                                    : 'Stream box office hits, classic cinema, acclaimed indies, inspiring documentaries, and much more.'}
                                </p>
                            </main>
                        </div>
                        <div className='bg-darkBg px-4'>
                            <p className='text-lg py-6'>Similar {currentScreenPlay.movieOrTv}</p>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={10}
                                slidesPerGroup={3}
                                loop={false}
                                loopFillGroupWithBlank={false}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                                breakpoints={{
                                    320: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    480: {
                                        slidesPerView: 3,
                                        spaceBetween: 20
                                    },
                                    830: {
                                        slidesPerView: 4,
                                        spaceBetween: 30
                                    }
                                }}
                            > 
                                { similarIdScreenPlayCard }
                            </Swiper>
                            <div className=' mx-auto w-full pb-7 flex flex-col'>
                                <p className='text-lg py-6'>{currentScreenPlay.type}</p>
                                <div className='grid  grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 mx-auto w-full'>
                                    { similarTypeScreenPlayCard }  
                                </div>
                                <button className='bg-primary text-slate-800 font-bold w-28 sm:w-40 py-2 mx-auto mt-6' onClick={changeSliceNumber}>
                                    {sliceNumber < 10 ? 'See More' : 'See Less'}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </Popup>
            )}
        </div>
    )
}

export default SecondPage
