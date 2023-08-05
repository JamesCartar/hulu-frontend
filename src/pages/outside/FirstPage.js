import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
// icons
import { AiOutlineClose } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';

// image
import  hulu_disney_espn  from '../../images/hulu-disney-espn.png';

import Navbar from '../../components/partials/Navbar';
import Popup from '../../components/partials/Popup';
import { LandingPageContext } from '../../context/landingPage/LandingPageContext';
import { Authenticate, AuthenticateFail, AuthenticateSuccess, hideMessage } from '../../context/landingPage/LandingPageAction';


function FirstPage() {
  const { state, hadleLogin, handleRegister, dispatch, handleOpenPopup, handleClosePopup } = useContext(LandingPageContext);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '' 
  });

  console.log(state)

  
  const handleSubmit = (e) => {
    dispatch(Authenticate());
    e.preventDefault();
    if(e.target.id === 'login') {
      const { name, ...loginInfo } = userInfo;
      // LOGIN API CALLING
      hadleLogin(loginInfo)
      .then((res) => {
        dispatch(AuthenticateSuccess(res.data));
        // setting user to localstorage
        localStorage.setItem('user', JSON.stringify(res.data));
      }).catch(e => {
        dispatch(AuthenticateFail(e.response.data.msg));
        setTimeout(() => {
          dispatch(hideMessage());
        }, 3000);
      });
    } else if(e.target.id === 'signup') {
      handleRegister(userInfo)
        .then((res) => {
          dispatch(AuthenticateSuccess(res.data));
          // setting user to localstorage
          localStorage.setItem('user', JSON.stringify(res.data));
        }).catch(e => {
          dispatch(AuthenticateFail(e.response.data.msg));
          setTimeout(() => {
            dispatch(hideMessage());
          }, 3000);
        })
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
                  <button className='uppercase font-thin' onClick={() => handleOpenPopup('login')}>Log in</button>
              </li>
          </ul>
      </Navbar>
      <div className='flex flex-col items-center justify-center max-w-xl md:max-w-3xl mx-auto pt-16 pb-20 gap-4 text-center'>

        <h2 className='text-lg md:text-2xl font-black my-3'>Get endless entertainment, live sports, and the shows and movies you love.</h2>
        <p className='text-primary uppercase -order-2 text-xxs sm:text-xs tracking-wider'>BUNDLE WITH ANY HULU PLAN & SAVE</p>
        <img className='max-w-[90%] -order-1 mt-1' src={hulu_disney_espn} alt='hulu, disney and espn+'/>
        <button className='block bg-primary hover:bg-primaryFade text-black transition duration-500 py-3.5 mb-2 w-full font-bold text-sm rounded uppercase'>get the disney bundle</button>
        <small className='-mt-2 text-slate-200 text-xxs tracking-wider'>
          <button className='underline text-neutral-100 text-current underline-offset-2' onClick={() => handleOpenPopup('include')}>
            What's included?
          </button>
          {' '} See {' '}
          <Link target='_blank' to='terms/disney-bundle' className='underline text-current text-neutral-100 underline-offset-2'>
            Bundle terms
          </Link>.
        </small>
        <p className='-mt-2'><button href='#' className='underline text-neutral-100 underline-offset-2' onClick={() => handleOpenPopup('signup')}>Sign up for Hulu only</button></p>

      </div>
      {(state.isShown && state.popUpText === 'login') &&
        <Popup>
          <div className='popup-inner w-full h-full md:h-auto max-w-md sm:w-[29rem] bg-white p-8 absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-5'>
              <button className='close-popup self-end' aria-label='close login pop up'  onClick={handleClosePopup}><AiOutlineClose className='text-2xl text-gray-500' /></button>
              <h3 className='text-2xl font-black'>Log In</h3>
              <form name='login' id='login' onSubmit={handleSubmit} className='flex flex-col w-full gap-5'>
                <div className="flex flex-wrap -mx-3 mb-1 mt-4">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="email">
                      Email Address
                    </label>
                    <input onChange={handleChange} id='email' name='email'  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-1">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="password">
                      Password
                    </label>
                    <input onChange={handleChange} id='password' name='password'  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="*********" required />
                  </div>
                  </div>
                {state.errorMsg && <p className='text-xs text-red-600'>{state.errorMsg}</p>}
                <button disabled={state.isFetching} type='submit' className='block bg-gray-600 hover:bg-gray-800 text-white transition duration-500 py-3.5 my-2 w-full font-bold text-sm rounded uppercase'>
                  Login
                  {state.isFetching && <svg aria-hidden="true" role="status" className="inline w-5 h-5 ml-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                  </svg> } 
                </button>
              </form>
          </div>
        </Popup>
      }
      {(state.isShown && state.popUpText === 'signup') &&
        <Popup>
          <div className='popup-inner w-11/12 max-w-md sm:w-[29rem] bg-white p-8 absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-5'>
              <button className='close-popup self-end' aria-label='close login pop up' onClick={() => handleClosePopup()}><AiOutlineClose className='text-2xl text-gray-500' /></button>
              <h3 className='text-2xl font-black'>Sign up</h3>
              <form name='signup' id='signup' onSubmit={handleSubmit} className='flex flex-col w-full gap-5'>
                  <div className="flex flex-wrap -mx-3 mb-1 mt-4">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="name">
                        User Name
                      </label>
                      <input onChange={handleChange} id='name' name='name'  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" required />
                    </div>
                  </div>
                  {/* <div className='flex flex-col'>
                    <label className='text-sm text-gray-500 tracking-wider' htmlFor='name'>Name</label>
                    <input required onChange={handleChange} id='name' name='name' type='text' className='text-base border border-black rounded focus:outline-none mt-1 p-3' />
                  </div> */}
                  <div className="flex flex-wrap -mx-3 mb-1">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="email">
                        Email Address
                      </label>
                      <input onChange={handleChange} id='email' name='email'  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" required />
                    </div>
                  </div>
                  {/* <div className='flex flex-col'>
                    <label className='text-sm text-gray-500 tracking-wider' htmlFor='email'>Email</label>
                    <input required onChange={handleChange} id='email' name='email' type='email' className='text-base border border-black rounded focus:outline-none mt-1 p-3' />
                  </div> */}
                  <div className="flex flex-wrap -mx-3 mb-1">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="password">
                        Password
                      </label>
                      <input onChange={handleChange} id='password' name='password'  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="*********" required />
                      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                  </div>
                  {/* <div className='flex flex-col'>
                    <label className='text-sm text-gray-500 tracking-wider' htmlFor='password'>Password</label>
                    <input required onChange={handleChange} id='password' name='password' type='password' className='text-base border border-black rounded focus:outline-none mt-1 p-3' />
                  </div> */}
                  {state.errorMsg && <p className='text-xs text-red-600'>{state.errorMsg}</p>}
                  <button disabled={state.isFetching} type='submit' className='block bg-gray-600 hover:bg-gray-800 text-white transition duration-500 py-3.5 my-2 w-full font-bold text-sm rounded uppercase'>
                    Sign up
                    {state.isFetching && <svg aria-hidden="true" role="status" className="inline w-5 h-5 ml-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                  </svg> } 
                  </button>
              </form>
          </div>
        </Popup>
      }
      {(state.isShown && state.popUpText === 'include') &&
        <Popup>
          <div className='popup-inner w-full min-h-full sm:min-h-fit sm:w-[40rem] bg-white p-4 sm:p-8 absolute sm:top-2/4 sm:left-2/4 sm:-translate-y-1/2 sm:-translate-x-1/2 flex flex-col gap-5'>
            <button className='close-popup self-end' aria-label='close login pop up' onClick={() => handleClosePopup()}><AiOutlineClose className='text-2xl text-gray-500' /></button>
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
};

export default FirstPage;
