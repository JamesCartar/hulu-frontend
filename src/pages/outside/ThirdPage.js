import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

function ThirdPage() {
  return (
    <div className='bg-darkBg text-white py-20 border border-x-0 border-b-0 border-gray-500'>
        <div className='flex flex-col gap-7 justify-center items-center max-w-3xl mx-auto px-5 text-center'>        
            <h3 className='text-2xl sm:text-5xl font-black font-current'>Live TV Makes It Better</h3>
            <p className='text-primary uppercase text-sm font-medium -order-1'>HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+</p>
            <p>
                Make the switch from cable. Get 75+ top channels on Hulu + Live TV with your favorite live sports, news, and 
                events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for up to nine months 
                and fast-forward through your DVR content. Access endless entertainment with Disney+ and live sports with ESPN+. For 
                a limited time, save $20/month for 3 months. Ends 10/5.
            </p>
            <small className='text-xxs text-neutral-500'>
                Ends 11:59 PM PST on 10/5/22. Offer for Hulu (ad-supported) + Live TV plan only. $49.99/month for 3 months, then 
                auto-renews at $69.99/month or then-current regular monthly price. Price will increase to $74.99/month as of 12/8/22. 
                Cancel anytime, effective at the end of your billing period. Valid for eligible new and returning Hulu subscribers (who 
                have not had Hulu in the past 1 month), 18+ only. Savings compared to regular monthly price. Additional offer terms apply
            </small>
            <p className='underline underline-offset-2'>VIEW CHANNELS IN YOUR AREA →</p>
            <a href='#billboard' className='animate-bounce'><FaArrowDown /></a>
        </div>
    </div>
  )
}

export default ThirdPage
