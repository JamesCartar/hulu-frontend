import React, { useContext, useEffect, useState } from 'react';
import { context } from '../../context/mainContext';

function Navbar() {
    const [ navState, setNavState ] = useState('hidden');
    const [scrollDirection, setScrollDirection] = useState('up');
    
    const { value: { user },  logout } = useContext(context);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
            setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        
        return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);


    const handleClick = () => {
        logout();
    }

    const toggleMobileMenu = () => {
        if(navState) {
            setNavState('')
        } else {
            setNavState('hidden');
        }
    }


  return (
    <nav className={`z-50 bg-black border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full fixed ${ scrollDirection === "down" ? "-top-24" : "top-0" } transition-all duration-500`}>
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/home" className="flex items-center">
                <h1 className="self-center text-primary text-3xl font-semibold whitespace-nowrap dark:text-white">hulu</h1>
            </a>
            <div className="flex md:order-2">
                <button onClick={toggleMobileMenu} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
                <div className="hidden relative md:block">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                </div>
                <button onClick={toggleMobileMenu} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                    <span className="sr-only">Open menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className={`${navState} justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search`}>
                <div className="relative mt-3 md:hidden">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                </div>
                <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li className='relative'>
                        <button className="peer flex justify-between items-center py-3 pr-4 pl-3 w-full font-medium text-gray-600 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:px-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                            <span className="sr-only">Open movies menu</span>
                            <span>Movies</span>
                        </button>
                        {/* movies dropdown */}
                        <ul className="absolute top-full left-1/2 transform -translate-x-1/2 hidden peer-hover:block hover:block z-10 w-5/6 md:w-44 text-black font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Popular</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Now Playing</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Upcoming</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Top Rated</a>
                            </li>
                        </ul>
                    </li>
                    <li className='relative'>
                        <button className="peer flex justify-between items-center py-3 pr-4 pl-3 w-full font-medium text-gray-600 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:px-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                        <span className="sr-only">Open series menu</span>
                        <span>Series</span>
                        </button>
                        {/* series dropdown */}
                        <ul className="absolute top-full left-1/2 transform -translate-x-1/2 hidden peer-hover:block hover:block z-10 w-5/6 md:w-44 text-black font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Popular</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Airing Today</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">On TV</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Top Rated</a>
                        </li>
                        </ul>
                    </li>
                    <li className='relative'>
                        <button className="peer flex justify-between items-center py-3 pr-4 pl-3 w-full font-medium text-gray-600 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:px-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                        <span className="sr-only">Open user menu</span>
                        <span>Profile</span>
                        </button>
                        {/* profile dropdown */}
                        <ul className="absolute top-full left-1/2 transform -translate-x-1/2 hidden peer-hover:block hover:block z-10 w-5/6 md:w-44 text-black font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <li className="py-3 px-4">
                                <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user.email}</span>
                            </li>
                            <li>
                                <button onClick={handleClick} className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
