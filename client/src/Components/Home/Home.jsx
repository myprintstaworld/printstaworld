import React from 'react'
import BrowserSlider from '../Sliders/BrowserSlider'
import Packaging from '../Sliders/Packaging'
import Stationery from '../Sliders/Stationery'
import SignMarkiting from '../Sliders/SignMarkiting'


function Home() {
  return (
    <>
    <div className='h-auto'>
    <BrowserSlider/>
    <Packaging/>
    <Stationery/>
    <SignMarkiting/>
    </div>
    </>
  )
}

export default Home