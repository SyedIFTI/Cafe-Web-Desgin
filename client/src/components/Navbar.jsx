import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {
  useGSAP(() => {
    const BrandName  = new SplitText(".brandName", {
      type: "lines,words",
    });
    gsap.to(".navbar", {
      backgroundColor: "#00000050",
      backdropFilter: "blur(10px)",
      duration: 0.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".navbar",
        start: "top top",
        end: "+=100",
        toggleClass: { targets: ".navbar", className: "scrolled" },
        scrub: true,
      }
    });
    gsap.from(BrandName.words, {
      opacity: 0,
      yPercent: -400,
      duration: 1,
      stagger:{
        amount: 0.05,
        from: "start",
        grid: "auto",
        axis: "y"
      },
      ease:"expo.out"
    });
    gsap.from(".brandlogo", {
      opacity: 0,
      yPercent: -400,
      duration: 1,
      ease: "expo.out"
    });
    gsap.from(".navbar ul li", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.inOut",
      delay:0.5
     
    });
    gsap.from(".navbar button", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power3.inOut",
      delay: 1
    });
  }, []);

  return (
    <>
      <div className='navbar w-full z-[10] md:px-20 text-white fixed flex py-1 justify-between items-center px-5 transition-all duration-500'>
        <div className='flex items-center gap-1'>
          <i className="brandlogo ri-drinks-fill text-3xl"></i>
          <h1 className='brandName text-3xl font-semibold tracking-wider'>Clarice Cafe</h1>
        </div>
        <ul className='text-sm flex justify-center items-center gap-4'>
          <li><a href="#">About us</a></li>
          <li><a href="#">Our Product</a></li>
          <li><a href="#">Our Store</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <button className='px-5 py-2 bg-emerald-950 text-white rounded-2xl text-base'>Order Now</button>
        <i className="ri-toggle-line text-3xl md:hidden"></i>
      </div>
      <style>
        {`
          .navbar.scrolled {
            background-color: #00000050 !important;
            backdrop-filter: blur(10px) !important;
          }
        `}
      </style>
    </>
  )
}

export default Navbar