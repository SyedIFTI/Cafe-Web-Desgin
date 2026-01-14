import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const WhyWeDifferent = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.whypage',
        start: 'top 70%',
        end: 'bottom 50%', // longer scroll distance for smoother animation
        scroller: "body",
        scrub: 1.5, // add a little smoothing
        // markers: true
      }
    });

    tl.from('.whypage .deta', {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
    })
    tl.from('.left', {
  opacity: 0,
  x: -200,
  duration: 1.5,
  ease: "expo.out",
}, "lefts") // label for lefts
.from('.l2-left', {
  opacity: 0,
  x: 200,
  duration: 1.5,
  ease: "expo.out",
}, "lefts") // same label, so both animate together
.from('.right', {
  opacity: 0,
  x: -200,
  duration: 1.5,
  ease: "expo.out",
}, "rights") // label for rights
.from('.l2-right', {
  opacity: 0,
  x: 200,
  duration: 1.5,
  ease: "expo.out",
}, "rights"); // same label, so both animate together
  }, []);

  return (
    <>
      <div className='whypage w-full overflow-hidden h-screen bg-[#fcf4ee] py-6'>
        <div className='deta w-full h-[10%] flex flex-col items-center justify-center'>
          <h1 className='text-5xl text-center font-bold text-[#452808] '>Why We Are Different</h1>
          <p className='text-[#452808] text-center text-lg font-semibold mt-4 tracking-wide'>We are committed to providing the best service possible.</p>
        </div>
        <div className='relative w-full h-full flex justify-between gap-20'>
          <div className='w-[50%] h-[89%] flex flex-col gap-20 items-center justify-center'>
            <div className='left w-[50%] flex flex-col items-center justify-center gap-2'>
              <img className='w-12' src="./seedicon.png" alt="" />
              <h2 className='text-[#452808] text-center text-2xl font-bold tracking-wide'>Rosted to Perfection</h2>
              <p className='text-[#452808] text-center text-sm'>Perfection rosted to highlight each bean's natural profile, delivering a consistently delightful coffee experience.</p>
            </div>
            <div className='right w-[50%] flex flex-col items-center justify-center gap-2'>
              <img className='w-12' src="./houseicon.png" alt="" />
              <h2 className='text-[#452808] text-2xl font-bold tracking-wide'>From Farm to Cup</h2>
              <p className='text-[#452808] text-center text-sm'>Our beans are sourced from the finest coffee farms around the world, ensuring the highest quality in every cup.</p>
            </div>
          </div>
          <div className='w-[50%] h-[89%] flex flex-col gap-20 items-center justify-center'>
            <div className='l2-left w-[50%] flex flex-col items-center justify-center gap-2'>
              <img className='w-12' src="./fireicon.png" alt="" />
              <h2 className='text-[#452808] text-center text-2xl font-bold tracking-wide'>Artisan Roasting</h2>
              <p className='text-[#452808] text-center text-sm'>Our artisan roasting process brings out the unique flavors of each bean, creating a truly exceptional cup of coffee.</p>
            </div>
            <div className='l2-right w-[50%] flex flex-col items-center justify-center gap-2'>
              <img className='w-12' src="./okicon.png" alt="" />
              <h2 className='text-[#452808] text-center text-2xl font-bold tracking-wide'>Commitment to Quality</h2>
              <p className='text-[#452808] text-center text-sm'>We preserve the beans' natural flavors through meticulous processing, ensuring a rich, satisfying cup of coffee.The original flavor still available</p>
            </div>
          </div>
          <div className='absolute rounded-full w-82 h-82 bg-[#dec5ab] -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 '>
          </div>
          <img className='cup absolute top-1/2 h-[90%] -translate-x-[50%] left-1/2 -translate-y-[50%]' src="./carttonmug.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default WhyWeDifferent