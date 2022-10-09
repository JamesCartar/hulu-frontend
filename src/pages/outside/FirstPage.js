import React, { useContext, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
// icons
import { AiOutlineClose } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';

// image
import  hulu_disney_espn  from '../../images/hulu-disney-espn.png';

import Navbar from '../../components/partials/Navbar';
import Popup from '../../components/partials/Popup';
import { context } from '../../context/mainContext';


function FirstPage() {
  const {value: { isShown, popUpText, errorMsg }, openPopup, closePopup, LoginOrRegister } = useContext(context);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '' 
  });


  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.id === 'login') {
        const { name, ...loginInfo } = userInfo;
        LoginOrRegister('login', loginInfo);
        navigate('../home', { replace: true });
    } else if(e.target.id === 'signup') {
        LoginOrRegister('register', userInfo);
        navigate('../home', { replace: true });
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInfo(preInfo => ({
      ...preInfo,
      [name]: value
    }))
  }


  return (
    <div className='outside-firstPage min-h-screen px-5 bg-no-repeat bg-cover relative bg-center'>
      <Navbar>
          <h1 className='text-3xl' aria-label='hulu logo'>hulu</h1>
          <ul className='flex'>
              <li aria-label='nav-link' className='text-slate-300 text-sm hover:bg-slate-700 hover:text-white p-3 px-5 cursor-pointer uppercase transition duration-500 rounded-md'>
                  <button className='uppercase font-thin' onClick={() => openPopup('login')}>Log in</button>
              </li>
          </ul>
      </Navbar>
      <div className='flex flex-col items-center justify-center max-w-xl md:max-w-3xl mx-auto pt-16 pb-20 gap-4 text-center'>

        <h2 className='text-lg md:text-2xl font-black my-3'>Get endless entertainment, live sports, and the shows and movies you love.</h2>
        <p className='text-primary uppercase -order-2 text-xxs sm:text-xs tracking-wider'>BUNDLE WITH ANY HULU PLAN & SAVE</p>
        <img className='max-w-[90%] -order-1 mt-1' src={hulu_disney_espn} alt='hulu, disney and espn+'/>
        <button className='block bg-primary hover:bg-primaryFade text-black transition duration-500 py-3.5 mb-2 w-full font-bold text-sm rounded uppercase'>get the disney bundle</button>
        <small className='-mt-2 text-slate-200 text-xxs tracking-wider'>
          <button className='underline text-neutral-100 text-current underline-offset-2' onClick={() => openPopup('include')}>
            What's included?
          </button>
          {' '} See {' '}
          <Link target='_blank' to='terms/disney-bundle' className='underline text-current text-neutral-100 underline-offset-2'>
            Bundle terms
          </Link>.
        </small>
        <p className='-mt-2'><button href='#' className='underline text-neutral-100 underline-offset-2' onClick={() => openPopup('signup')}>Sign up for Hulu only</button></p>

      </div>
      {(isShown && popUpText === 'login') &&
        <Popup>
          <div className='popup-inner w-11/12 max-w-md sm:w-[29rem] bg-white p-8 absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-5'>
              <button className='close-popup self-end' aria-label='close login pop up'  onClick={closePopup}><AiOutlineClose className='text-2xl text-gray-500' /></button>
              <h3 className='text-2xl font-black'>Log In</h3>
              <form name='login' id='login' onSubmit={handleSubmit} className='flex flex-col w-full gap-5'>
                  <div className='flex flex-col'>
                    <label className='text-sm text-gray-500 tracking-wider' htmlFor='email'>Email</label>
                    <input required onChange={handleChange} id='email' type='email' name='email' className='text-base border border-black rounded focus:outline-none mt-1 p-3' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm text-gray-500 tracking-wider' htmlFor='password'>Password</label>
                    <input required onChange={handleChange} id='password' type='password' name='password' className='text-base border border-black rounded focus:outline-none mt-1 p-3' />
                  </div>
                  {errorMsg && <p className='text-xs text-red-600'>{errorMsg}</p>}
                  <button type='submit' className='block bg-gray-600 hover:bg-gray-800 text-white transition duration-500 py-3.5 my-2 w-full font-bold text-sm rounded uppercase'>Login</button>
              </form>
          </div>
        </Popup>
      }
      {(isShown && popUpText === 'signup') &&
        <Popup>
          <div className='popup-inner w-11/12 max-w-md sm:w-[29rem] bg-white p-8 absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-5'>
              <button className='close-popup self-end' aria-label='close login pop up' onClick={() => closePopup()}><AiOutlineClose className='text-2xl text-gray-500' /></button>
              <h3 className='text-2xl font-black'>Sign up</h3>
              <form name='signup' id='signup' onSubmit={handleSubmit} className='flex flex-col w-full gap-5'>
                  <div className='flex flex-col'>
                    <label className='text-sm text-gray-500 tracking-wider' htmlFor='name'>Name</label>
                    <input required onChange={handleChange} id='name' name='name' type='text' className='text-base border border-black rounded focus:outline-none mt-1 p-3' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm text-gray-500 tracking-wider' htmlFor='email'>Email</label>
                    <input required onChange={handleChange} id='email' name='email' type='email' className='text-base border border-black rounded focus:outline-none mt-1 p-3' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm text-gray-500 tracking-wider' htmlFor='password'>Password</label>
                    <input required onChange={handleChange} id='password' name='password' type='password' className='text-base border border-black rounded focus:outline-none mt-1 p-3' />
                  </div>
                  {errorMsg && <p className='text-xs text-red-600'>{errorMsg}</p>}
                  <button type='submit' className='block bg-gray-600 hover:bg-gray-800 text-white transition duration-500 py-3.5 my-2 w-full font-bold text-sm rounded uppercase'>
                    Sign up
                  </button>
              </form>
          </div>
        </Popup>
      }
      {(isShown && popUpText === 'include') &&
        <Popup>
          <div className='popup-inner w-full min-h-full sm:min-h-fit sm:w-[40rem] bg-white p-4 sm:p-8 absolute sm:top-2/4 sm:left-2/4 sm:-translate-y-1/2 sm:-translate-x-1/2 flex flex-col gap-5'>
            <button className='close-popup self-end' aria-label='close login pop up' onClick={() => closePopup()}><AiOutlineClose className='text-2xl text-gray-500' /></button>
            <h3>What's Included in The Disney Bundle?</h3>
            <p>
              <FaCheck className='text-xl justify-start items-start inline'/> Subscriptions to Disney+, ESPN+, and Hulu for a discounted price. 
              Available with Hulu (ad-supported) for $13.99/month or with Hulu 
              (No Ads) for $19.99/month.
            </p>
            <p>
              <FaCheck className='text-xl justify-start items-start inline'/> Savings of $7.98/month compared to the regular price of each service.
            </p>
            <p>
              <FaCheck className='text-xl justify-start items-start inline'/>  Enjoy all your favorite shows, movies, sports, and more using the 
              Disney+, Hulu, and ESPN apps (or sites, for those on a browser). Download each app separately to access each service.
            </p>
            <p>
              <FaCheck className='text-xl justify-start items-start inline'/> Access select ESPN+ content via Hulu.
            </p>
            <p>
              <FaCheck className='text-xl justify-start items-start inline'/> Cancel anytime.
            </p>
            <p>No free trial available. Savings compared to regular price for each service. 18+ only.</p>
          </div>
        </Popup>
      }
    </div>
  )
}

export default FirstPage;
