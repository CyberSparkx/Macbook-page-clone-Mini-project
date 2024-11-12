import React from 'react'
import Hero from './Components/Hero.jsx'
import M4Chip from './Components/M4Chip.jsx'
import MacIphpone from './Components/MacIphpone.jsx'
import MAcModel from './Components/MacModel.jsx'
import Nav from './Components/Nav.jsx'
import NeonHelloCard from './Components/NeonHelloCard.jsx'
import Slider from './Components/Slider.jsx'

const Home = () => {
  return (
    <div className='bg-zinc-900 w-full h-screen overflow-x-hidden'>

<Nav/>
  <Hero />
  <NeonHelloCard/>
  <Slider/>
  <MAcModel/>
  <M4Chip/>
  <MacIphpone/>
</div>

  )
}

export default Home