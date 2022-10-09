import React from 'react';

// icons
import { FaFacebookF } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <div className=' text-gray-500 bg-zinc-200 text-sm p-3 pt-10 tracking-wider'>
        <div className='flex flex-wrap gap-10 max-w-5xl mx-auto border-b-2 border-gray-300 pb-10'>
            <div className='flex flex-col flex-wrap'>
                <p className='font-black text-black uppercase mb-2'>Browser</p>
                <div className='flex gap-10 flex-wrap'>
                    <div className='flex flex-col gap-2'>
                        <span>Streaming Library</span>
                        <span>Live TV</span>
                        <span>Live News</span>
                        <span>Live Sports</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>TV Shows</span>
                        <span>Movies</span>
                        <span>Originals</span>
                        <span>Networks</span>
                        <span>Kids</span>
                        <span>FX</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>HBO Max™</span>
                        <span>Cinemax</span>
                        <span>Showtime</span>
                        <span>STARZ</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>Hulu, Disney+, and ESPN+</span>
                        <span>Hulu (No Adds), Disney+, and ESPN+</span>
                        <span>Student Discount</span>
                    </div>
                </div>
            </div>
            <div>
                <p className='font-black text-black uppercase tracking-wider mb-2'>Help</p>
                <div className='flex flex-col gap-2'>
                    <span>Account & Billing</span>
                    <span>Plans & Pricing</span>
                    <span>Supported Devices</span>
                    <span>Accessibility</span>
                </div>
            </div>
            <div>
                <p className='font-black text-black uppercase tracking-wider mb-2'>About Us</p>
                <div className='flex flex-col gap-2'>
                    <span>Shop Hulu</span>
                    <span>Press</span>
                    <span>Jobs</span>
                    <span>Contact</span>
                </div>
            </div>
        </div>
        <div className=' max-w-5xl mx-auto flex flex-col gap-4 mt-5'>
            <div className='flex mt-7 gap-8 flex-wrap'>
                <FaFacebookF className='text-2xl' />
                <BsTwitter className='text-2xl' />
                <BsYoutube className='text-2xl' />
                <BsInstagram className='text-2xl' />
            </div>
            <div className='flex flex-wrap text-xs'>
                <span className='mr-6 mb-3'>© 2022 Hulu, LLC</span>
                <span className='mr-6 mb-3'>About Ads</span>
                <span className='mr-6 mb-3'>Terms of Use</span>
                <span className='mr-6 mb-3'>Privacy Policy</span>
                <span className='mr-6 mb-3'>Do Not Sell My Personal Information</span>
                <span className='mr-6 mb-3'>Your California Privacy Rights</span>
                <span className='mr-6 mb-3'>TV Parental Guidelines</span>
                <span className='mr-6 mb-3'>Sitemap</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
