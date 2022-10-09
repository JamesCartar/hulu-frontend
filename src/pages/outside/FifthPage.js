import React, { useState } from 'react';
// image
import  small_hulu_disney_espn  from '../../images/small-hulu-disney-espn.svg';

// icon
import { FaCheck } from 'react-icons/fa';
import { BsDashLg } from 'react-icons/bs';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowDropUpLine } from 'react-icons/ri';


const PLANSDATA = [
    {
        planFeature: 'Streaming Library with thousands of TV episodes and movies',
        check1: true,
        check2: true
    },
    {
        planFeature: 'Most new episodes the day after they air^',
        check1: true,
        check2: true
    },
    {
        planFeature: 'Access to award-winning Hulu Originals',
        check1: true,
        check2: true
    },
    {
        planFeature: 'Watch on your TV, laptop, phone, or tablet',
        check1: true,
        check2: true
    },
    {
        planFeature: 'Up to 6 user profilesUp to 6 user profiles',
        check1: true,
        check2: true
    },
    {
        planFeature: 'Watch on 2 different screens at the same time',
        check1: true,
        check2: true
    },
    {
        planFeature: 'No ads in streaming libraryNo ads in streaming library',
        check1: false,
        check2: true
    },
    {
        planFeature: 'Download and watch',
        check1: false,
        check2: true
    },
];

const PLANADDDON = [
    {
        planFeature: 'HBO Max™',
        check1: true,
        check2: true
    },
    {
        planFeature: 'CINEMAX®',
        check1: true,
        check2: true
    },
    {
        planFeature: 'SHOWTIME®',
        check1: true,
        check2: true
    },
    {
        planFeature: 'STARZ®',
        check1: true,
        check2: true
    },
]

function FifthPage() {

    const [showAddOn, setShowAddOn] = useState(false);

    const planRow = (data) => {
        return data.map((feature, index) => (
            <div key={index} className='flex flex-col md:flex-row gap-0 md:gap-2 border border-x-0 border-slate-500 px-2 md:py-6'>
                <div className='flex gap-2 mr-auto items-center md:justify-start justify-center p-3 md:p-0 md:border-0 flex-1 md:w-auto w-full'>
                    <p className='text-xs max-w-sm md:text-start text-center'>{feature.planFeature}</p>
                </div>
                <div className='flex gap-1 md:gap-3 px-2'>
                    <div className='p-2 pb-4 md:p-0 w-1/2 md:w-52 text-center flex justify-center items-center'>
                        {feature.check1 ? <FaCheck className='text-primary' /> : <BsDashLg className='text-slate-400' />}
                    </div>
                    <div className='p-2 pb-4 md:p-0 w-1/2 md:w-52 text-center flex justify-center items-center'>
                        {feature.check2 ? <FaCheck className='text-primary' /> : <BsDashLg className='text-slate-400' />}
                    </div>
                </div>
            </div>
        ))
    };

    const toggleAddOn = () => {
        setShowAddOn(preAddOnState => !preAddOnState)
    }

    const planFeatureRow = planRow(PLANSDATA);
    const planAddOnRow = planRow(PLANADDDON);



  return (
    <div className='py-20 px-2 bg-darkBg'>
        <div className='flex flex-col gap-4 justify-center items-center max-w-2xl mx-auto px-5 text-center'>
            <h3 className='text-2xl sm:text-5xl font-black font-current'>Select Your Plan</h3>
            <p className='pt-0'>
                No hidden fees, equipment rentals, or installation appointments.
                Switch plans or cancel anytime.^^
            </p>
        </div>
        <div className='max-w-4xl mx-auto mt-12'>
            <div className='sticky top-0 flex flex-col md:flex-row gap-0 md:gap-2 border border-x-0 border-slate-500 p-0 md:py-6 md:px-2 bg-darkBg'>
                <div className='flex gap-2 mr-auto items-center justify-center py-4 md:p-0 border border-x-0 border-slate-500 md:border-0 flex-1 md:w-auto w-full'>
                    <div>
                        <p className='text-sm uppercase'>base plans</p>
                        <h1 className='text-primary text-center mt-3'>hulu</h1>
                    </div>
                    <div className='relative w-14 h-7 rounded-full bg-slate-500 cursor-not-allowed'>
                        <span className='block bg-white w-7 h-7 rounded-full absolute left-0 -top-0'></span>
                    </div>
                    <div>
                        <p className='text-sm uppercase'>BUNDLE / SAVE</p>
                        <img className='max-w-xs' src={small_hulu_disney_espn} />
                    </div>
                </div>
                <div className='flex gap-1 md:gap-3 px-2'>
                    <div className='py-4 px-2 md:p-0 flex flex-col gap-3 w-1/2 md:w-52 text-center'>
                        <p className='px-6 py-2 bg-primary rounded-3xl text-xxs text-black tracking-widest self-center'>MOST POPULAR</p>
                        <div>
                            <span className='text-slate-400 text-sm'>30 DAY FREE TRIAL</span>
                            <p>Hulu</p>
                        </div>
                        <button className='py-3 text-black bg-slate-200 text-sm font-bold rounded'>$ 6.99 / MONTH**</button>
                    </div>
                    <div className='block w-[.5px] bg-white md:hidden'></div>
                    <div className='py-4 px-2 md:p-0 flex flex-col gap-3 w-1/2 md:w-52 justify-end text-center '>
                        <div>
                            <span className='text-slate-400 text-sm'>30 DAY FREE TRIAL</span>
                            <p>Hulu (No Ads)</p>
                        </div>
                        <button className='py-3 text-black bg-slate-200 text-sm font-bold rounded'>$ 12.99 / MONTH**</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-0 md:gap-2 border border-x-0 border-slate-500 px-2 md:py-6'>
                <div className='flex gap-2 mr-auto items-center md:justify-start justify-center p-3 md:p-0 md:border-0 flex-1 md:w-auto w-full'>
                   <p className='text-xs'>Monthly price</p>
                </div>
                <div className='flex gap-1 md:gap-3 px-2'>
                    <div className='p-2 pb-4 md:p-0 flex flex-col gap-3 w-1/2 md:w-52 text-center'>
                        <p>$6.99/mo.**</p>
                    </div>
                    <div className='p-2 pb-4 md:p-0 flex flex-col gap-3 w-1/2 md:w-52 justify-end text-center'>
                        <p>$12.99/mo.**</p>
                    </div>
                </div>
            </div>

            {/* plan feature rows */}
            {planFeatureRow}

            <div className='m-3'>
                <p className='text-xxs text-slate-500'>^For current-season shows in the streaming library only</p>
                <p className='text-xxs text-slate-500'>**The price of Hulu’s ad-supported plan will increase to $7.99/month and the price of Hulu (No Ads) will increase to $14.99/month on 10/10/2022.</p>
                <p className='text-xxs text-slate-500'>^^Switches from Live TV to Hulu take effect as of the next billing cycle</p>
            </div>
            
            <div className='mt-16'> 
                <div className={`${!showAddOn ? 'h-0' : 'h-auto'} overflow-hidden`}>
                    <h3 className='text-3xl font-black px-2'>Available Add-ons</h3>
                    <p className='text-sm mt-5 px-2'>Add-ons available at an additional cost.</p>
                    <p className='text-sm px-2'>Add them up after you sign up for Hulu.</p>
                    <div className='mt-5'>

                        {/* plan add on feature rows */}
                        {planAddOnRow}
                    </div>
                </div>

                <p aria-label='toggle add on plan' className='text-center border border-x-0 border-slate-500 py-4 cursor-pointer' onClick={toggleAddOn}>
                    {!showAddOn ? 'Show' : 'Hide'}
                    {" "}
                    Add-ons
                    {" "}
                    {!showAddOn ? <RiArrowDownSLine className='inline text-3xl' /> :  <RiArrowDropUpLine className='inline text-3xl' />}
                </p>
            </div>
        </div>
    </div>
  )
}

export default FifthPage
