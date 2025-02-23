/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const scroll = new LocomotiveScroll();
  return (
    <div className="font-['Satoshi'] h-fit w-full bg-[#181818] text-white">
     <Navbar />
     <Work />
     <Stripes />
     <Products />
     <Marquees />
     <Cards />
     <Footer />
    </div>
  )
}

export default App
