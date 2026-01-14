import { div } from 'framer-motion/client'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-52  bg-green-300 px-20'
    style={{
          backgroundImage: "url('./green.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundBlendMode: "darken",
          backgroundColor: "rgba(20, 40, 20, 0.85)",
        }}
    >
<div className='w-full h-20 flex justify-between items-center  py-5 text-white'>
  <div className='flex items-center gap-1'>
          <i className="brandlogo ri-drinks-fill text-xl"></i>
          <h1 className='brandName text-xl font-semibold tracking-wider'>Clarice Cafe</h1>
        </div>
          <ul className='text-sm flex justify-center items-center gap-4'>
          <li><a href="#">Product</a></li>
          <li><a href="#">Store</a></li>
               <li><a href="#">Blog</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Career</a></li>
        </ul>
       <div className = "text-emerald-900 flex gap-2 items-center justify-center ">
         <i  className="ri-facebook-circle-fill bg-white px-1 text-2xl rounded-full "></i>
        <i  className="ri-instagram-line bg-white px-1 text-2xl rounded-full "></i>
        <i  className="ri-twitter-x-fill bg-white px-1 text-2xl rounded-full "></i>
        <i  className="ri-linkedin-box-fill bg-white px-1 text-2xl rounded-full "></i>
        <i  className="ri-youtube-fill bg-white px-1 text-2xl rounded-full "></i>
       </div>


</div>
<hr className='mt-10 border border-[#427f71]' />
<div className='flex justify-between items-center text-sm text-[#a8c8c0] mt-8'>
<p>2025 Claric Cafe.All right reserved</p>
<div className=' flex gap-4'>
  <a className='decoration-1 underline' href="#">Privacy Policy</a>
  <a className='decoration-1 underline' href="#">Terms of Service</a>
  <a className='decoration-1 underline' href="#">Contact Us</a>

</div>
</div>
    </div>
  )
}

export default Footer