import React, { useEffect, useRef } from 'react'
import Home from './pages/Home'
import BrandShowcase from './components/BrandShowcase'
import RecentProduct from './components/RecentProduct'
import ScrollVelocity from './components/ScrollVelocity';
import WhyWeDifferent from './components/WhyWeDifferent';
import { Gallery } from './components/Gallery';
import Footer from './components/Footer';
const App = () => {

  const velocity  = 50

  return (
  <>
  <Home/>
  <BrandShowcase/>
  <RecentProduct/>
<ScrollVelocity
  texts={['Dive Into Our Cafe Perk Up Your Cafe Experience...', 'Savor Rich Bodied Flavour Our Premium Beans']} 
  velocity={velocity} 
  className="custom-scroll-text text-5xl"
/>
<WhyWeDifferent/>

<Gallery/>
<Footer/>

  </>
  )
}

export default App