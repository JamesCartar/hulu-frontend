import React, { useEffect, useRef, useState } from 'react';
// live sport Logos
import sportTabBg from '../../images/sportTabBg.jpg';
import verticalSportTabBg from '../../images/verticalSportTabBg.jpg';
import networkLogo from '../../images/sports-network-logo-1.png';
import espnLogo from '../../images/espn-network-logo.png';
import foexsportLogo from '../../images/foxsports1-network-logo-0.svg';
import fs1Logo from '../../images/fs1.png';
// breaking news Logos
import newsTabBg from '../../images/newsTabBg.jpg';
import verticalNewsTabBg from '../../images/verticalNewsTabBg.jpg';
import abcLogo from '../../images/abc-news-live-network-logo.png';
import cnnLogo from '../../images/cnn-network-logo.svg';
import msnbcLogo from '../../images/msnbc-network-logo.png';
import foxLogo from '../../images/foxnews-network-logo.svg';
// biggest events Logos
import eventTabBg  from '../../images/eventTabBg.jpg';
import verticalEventTabBg from '../../images/verticalEventTabBg.jpg';
import emmyLogo from '../../images/emmys-logo-full.png';
import goldenGlobeLogo from '../../images/golden-globe-logo-full.png';
import grammyLogo from '../../images/grammys-logo-full.png';
import oscarLogo from '../../images/oscars-logo-full.png';


const TABDATA = {
  sport: {
    tabTitle: 'Live Sports',
    tabText: 'Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.',
    tabLogo: [networkLogo, espnLogo, foexsportLogo, fs1Logo],
  },
  news: {
    tabTitle: 'Breaking News',
    tabText: "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
    tabLogo: [abcLogo, cnnLogo, msnbcLogo, foxLogo],
  },
  event: {
    tabTitle: 'Biggest Events',
    tabText: "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
    tabLogo: [emmyLogo, goldenGlobeLogo, grammyLogo, oscarLogo],
  }
}

function FourthPage() {
  const [currentTab, setCurrentTap] = useState('sport');
  const [matchWidth, setMatchWidth] = useState(() => window.matchMedia("(max-width: 840px)").matches );
  const tabIndicatorRef = useRef(null);
  const sportBtnRef = useRef(null);
  const newsBtnRef = useRef(null);
  const eventBtnRef = useRef(null);

  useEffect(() => {
    const handler = e => setMatchWidth(e.matches);
    window.matchMedia("(max-width: 840px)").addEventListener('change', handler);

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelector('.tab.active').classList.remove('active');
        tab.classList.add('active')
      })
    })

    return () => {
      window.matchMedia("(max-width: 840px)").removeEventListener('change', handler);
      tabs.forEach((tab) => {
        tab.removeEventListener('click', () => {
          document.querySelector('.tab.active').classList.remove('active');
          tab.classList.add('active')
        })
      })
    }
  }, [matchWidth]);

  let backgroundImage;
  if(currentTab === 'sport') {
    if(matchWidth) {
      backgroundImage = verticalSportTabBg;
    } else {
      backgroundImage = sportTabBg;
    }
  } else if(currentTab === 'news') {
    if(matchWidth) {
      backgroundImage = verticalNewsTabBg;
    } else {
      backgroundImage = newsTabBg;
    }
  } else if(currentTab === 'event') {
    if(matchWidth) {
      backgroundImage = verticalEventTabBg;
    } else {
      backgroundImage = eventTabBg;
    }
  }
  


  function changeSpotlightTabs(e) {
    let tapContentContainer = document.querySelector('.tapContentContainer');
    tapContentContainer.classList.toggle('state1');
    tapContentContainer.classList.toggle('state-2');
    let tapName = e.target.name;
    setCurrentTap(tapName);
  }

  function makeCurrentTapHtml(tab) {
    return (
      <div className='tapContentContainer flex flex-col gap-5 state-2'>
        <p className='text-4xl sm:text-5xl font-black'>{tab.tabTitle}</p>
        <p className='max-w-sm text-sm'>{tab.tabText}</p>
        <div className='flex gap-5'>
          <div className='bg-white w-11 h-11 rounded-full flex justify-center items-center'>
            <img className='max-w-full' src={tab.tabLogo[0]} alt='' />
          </div>
          <div className='bg-white w-11 h-11 rounded-full flex justify-center items-center'>
            <img className='max-w-full' src={tab.tabLogo[1]} alt='' />
          </div>
          <div className='bg-white w-11 h-11 rounded-full flex justify-center items-center'>
            <img className='max-w-full' src={tab.tabLogo[2]} alt='' />
          </div>
          <div className='bg-white w-11 h-11 rounded-full flex justify-center items-center'>
            <img className='max-w-full' src={tab.tabLogo[3]} alt='' />
          </div>
        </div>
        <p className='text-xxs text-neutral-500'>
          Live TV plan required. Regional restrictions, blackouts and additional terms apply.
          {' '}
          <button className='underline text-neutral-100 text-current underline-offset-2'>
            See details
          </button>
        </p>
      </div>
    )
  }

  const currentTapCard = makeCurrentTapHtml(TABDATA[currentTab]);

  const updateTabIndicator = () => {
    const activeTabButtonRef = currentTab === 'sport' ? sportBtnRef : currentTab === 'news' ? newsBtnRef : eventBtnRef;

    if (activeTabButtonRef.current) {
      const activeTabButton = activeTabButtonRef.current;
      const indicator = tabIndicatorRef.current;
      indicator.style.width = `${activeTabButton.offsetWidth}px`;
      indicator.style.transform = `translateX(${activeTabButton.offsetLeft}px)`;
    }
  };
  // Call the updateTabIndicator function whenever the currentTab changes
  useEffect(() => {
    updateTabIndicator();
  }, [currentTab]);



  return (
    <div id='billboard' className='flex justify-center items-start sm:items-center min-h-screen py-28 sm:py-0 bg-darkBg bg-no-repeat bg-right bg-cover text-white' 
    style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%), url('${backgroundImage}')`}}>
      <div className='p-0 sm:px-4 sm:w-5/6 overflow-x-hidden'>
          <div className='flex gap-3 text-left relative lg:ml-0 ml-5 text-[11px] sm:text-sm'>
            <div ref={tabIndicatorRef} className={`absolute bottom-0 left-0 tabIndicater h-1 bg-white transition-all duration-500 ease-in-out `}></div>
            <div ref={sportBtnRef} fclassName='relative'>
              <button name='sport' className='inline-block text-left w-full font-bold pb-2' onClick={changeSpotlightTabs}>LIVE SPORTS</button>
            </div>
            <div ref={newsBtnRef} className='relative'>
              <button name='news' className='inline-block text-left w-full font-bold pb-2' onClick={changeSpotlightTabs}>BREAKING NEWS</button>
            </div>
            <div ref={eventBtnRef} className='relative'>
              <button name='event' className='inline-block text-left w-full font-bold pb-2' onClick={changeSpotlightTabs}>BIGGEST EVENTS</button>
            </div>
          </div>
          <div className='px-4 sm:px-0 mt-10 overflow-y-hidden'>
            {currentTapCard}
          </div>
      </div>
    </div>
  )
}

export default FourthPage
