import React from 'react';

function BundleTerms() {
  return (
    <div className='disney-bundle-terms text-black bg-slate-100 pt-12 w-full min-h-full text-[.95rem]'>
      <div className='max-w-2xl m-auto leading-normal'>
        <h3 className='text-4xl text-gray-800 font-bold pb-6 line font-sans'>Hulu, Disney+, ESPN+ Bundle Terms and Conditions</h3>
        <p className='pb-5'>EFFECTIVE DATE: November 18, 2021</p>
        <p className='pb-5'>
          These Terms and Conditions govern your purchase of a subscription giving you access to each of Hulu (Hulu’s ad-supported plan), Disney+, and ESPN+ 
          (“Bundled Services”) for the then-advertised price plus applicable taxes, that represents a discounted price as compared to the retail price of each 
          plan when purchased separately (“Bundle”). By purchasing the Bundle through Hulu or its supported third-party partners (which, for clarity, do not 
          include Disney+ or ESPN+), you also agree to the Disney+ and ESPN+ Subscriber Agreement. If you purchase the Bundle through Hulu or its supported 
          third-party partners, then in the event of any conflict between the Disney+ and ESPN+ Subscriber Agreement and the provisions in these Terms and 
          Conditions concerning Bundle purchase, billing, and cancellation, these Terms and Conditions control.
        </p>
        <p className='pb-5'>
          These Terms and Conditions also incorporate by reference the Hulu Terms of Use as if set forth herein, including without limitation, Section 11 
          (“Disclaimer of Warranties, Limitation of Liability and Indemnity”), Section 13 (“Arbitration of Claims”), Section 14 (“Limitation on Time to Bring 
          a Claim”) and Section 15.3 (“Choice of Law and Forum”).
        </p>
        <ol className="list-decimal ml-8 sm:ml-12">
          <li className='pb-5'>
            <span className='font-bold'>Eligibility Criteria.</span>
            {' '}
            The Bundle is only available to residents of the United States and certain U.S. territories and 
            who are 18 years of age (or the age of majority in your state or territory of residence). If you subscribe to the Bundle 
            and are under 18 years of age, you will be unable to activate one or more of your Bundled Service subscriptions, and your 
            Bundle subscription may be canceled without notice.
            <ul className='list-[lower-roman] ml-8 sm:ml-12 pt-5'>
              <li className='pb-5'>
                <span className='font-bold'>Hulu Subscribers.</span>
                  {' '}
                  If you pay for or receive access to your Hulu subscription through a third party, you may be ineligible 
                  to subscribe to the Bundle through Hulu. Supported third-party partners for the Bundle may vary from time to time. If you 
                  subscribe to Hulu pursuant to a promotional offer and wish to purchase the Bundle through Hulu, you may be required to 
                  forfeit your promotional pricing.
              </li>
              <li className='pb-5'>
                <span className='font-bold'>Disney+ or ESPN+ Subscribers.</span>
                  {' '}
                  If you have an existing subscription with Disney+ and/or ESPN+, you may be ineligible to subscribe to the Bundle 
                  though Hulu and will be directed to Disney+ to complete your Bundle purchase. If you have an existing subscription 
                  with Disney+ and/or ESPN+ and are eligible to subscribe to the Bundle through Hulu, you may do so without cancelling 
                  your existing subscription(s). The amount charged for the Bundle will be automatically adjusted to account for any 
                  existing subscription(s) with Disney+ and/or ESPN+ for so long as you maintain an eligible subscription through Disney+
                  and/or ESPN+. Note that if you have an existing subscription with Disney+ and/or ESPN+, the Bundle will not change or 
                  replace that subscription.
              </li>
            </ul>
          </li>
          <li className='pb-5'>
            <span className='font-bold'>Free Trials.</span>
            {' '}
            While you may be eligible for a free trial of one or more of the Bundled Services if purchased individually, 
            there is no free trial for the Bundle unless specifically offered.
          </li>
          <li className='pb-5'>
            <span className='font-bold'>Modifications to Your Hulu Plan.</span>
            {' '}
            If you subscribe to the Bundle through Hulu or its supported third-party 
            partners, you may be given the choice to substitute a different Hulu plan for the Hulu (ad-supported) plan included with 
            the Bundle. If you do so, the total amount you are billed will be adjusted accordingly.
          </li>
          <li className='pb-5'>
            <span className='font-bold'>Disney+ and ESPN+ Activation.</span>
            {' '}
            After you complete your purchase of the Bundle through Hulu, you may need to follow the instructions provided to create 
            one separate account for Disney+ and ESPN+ and activate those subscriptions.
          </li>
          <li className='pb-5'>
            <span className='font-bold'>Data Sharing.</span>
            {' '}
            By subscribing to the Bundle, you agree that certain account information (e.g., your e-mail address) will be provided to 
            each Bundled Service for purposes of assessing your eligibility for the Bundle, activating, administering, improving your 
            experience with the Bundle and each Bundled Service, and communicating with you about the Bundle and each Bundled Service. 
            Any such account information received by the Bundled Services will be subject to each Bundled Service provider’s respective 
            Privacy Policy which can be found here:
            <div className='pt-5'>
              <a href='#' className='text-indigo-800'>https://hulu.com/privacy</a>
              <br />
              <a href='#' className='text-indigo-800'>https://privacy.thewaltdisneycompany.com/en/current-privacy-policy</a>
            </div>
          </li>
          <li className='pb-5'>
            <span className='font-bold'>Separate Apps.</span>
            {' '}
            You will need to access each Bundled Service through its respective website or application to access the content available 
            on that Bundled Service, and subject to the availability of features and functionalities (e.g., number of permitted 
            simultaneous content streams, content resolution, geographic limitations for access, temporary downloads) for that Bundled 
            Service.
          </li>
          <li className='pb-5'>
            <span className='font-bold'>Cancellation.</span>
            {' '}
            If you purchase the Bundle through Hulu or its supported third-party partners, you may cancel the Bundle at any time, 
            effective as of the end of your current paid billing cycle. By canceling the Bundle, you will lose access to all Bundled 
            Services.
          </li>
          <li className='pb-5'>
            <span className='font-bold'>Modifications.</span>
            {' '}
            This promotional offer may be modified or terminated at any time. Hulu also reserves the right to amend, modify, or waive 
            these Terms and Conditions from time to time, effective automatically upon your purchase of the Bundle (if you are a new or 
            returning Bundle subscriber) or 30 days after the revised Terms and Conditions are posted (if you are currently a Bundle 
            subscriber).
          </li>
        </ol>
      </div>
    </div>
  )
}

export default BundleTerms
