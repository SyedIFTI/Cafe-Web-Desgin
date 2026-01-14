import React from 'react'

const BrandShowcase = () => {
  return (
    <>
    <div className=' w-full  bg-amber-400 px-5 md:px-20 py-5 flex items-center '>
<div className=' text-shadow-amber-900  md:w-[40%]'>
<h3 className='font-medium md:text-xl'>Trusted by many cafe everywhere</h3>
</div>
<div class="logos">
  <div class="logos-track">
    <img src="./Apple-Logo.svg" alt="" />
    <img src="./Telegram-Logo.svg" alt="" />
    <img src="./Github-Logo.svg" alt="" />
    <img src="./Designmoo-Logo.svg" alt="" />
    <img src="./Wordpress-Logo.svg" alt="" />

    {/* <!-- duplicate for seamless loop --> */}
    <img src="./Apple-Logo.svg" alt="" />
    <img src="./Telegram-Logo.svg" alt="" />
    <img src="./Github-Logo.svg" alt="" />
    <img src="./Designmoo-Logo.svg" alt="" />
    <img src="./Wordpress-Logo.svg" alt="" />

     <img src="./Apple-Logo.svg" alt="" />
    <img src="./Telegram-Logo.svg" alt="" />
    <img src="./Github-Logo.svg" alt="" />
    <img src="./Designmoo-Logo.svg" alt="" />
    <img src="./Wordpress-Logo.svg" alt="" />

     <img src="./Apple-Logo.svg" alt="" />
    <img src="./Telegram-Logo.svg" alt="" />
    <img src="./Github-Logo.svg" alt="" />
    <img src="./Designmoo-Logo.svg" alt="" />
    <img src="./Wordpress-Logo.svg" alt="" />
  </div>
</div>


    </div>
    
    </>
  )
}

export default BrandShowcase