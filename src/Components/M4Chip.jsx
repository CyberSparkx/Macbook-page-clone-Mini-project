import React from 'react'

const M4Chip = () => {
  return (
    <div className='w-full h-screen'>
        <div className='ml-[15vw] mb-28'>
        <p className='text-zinc-50 text-2xl font-semibold'>PERFORMENCE</p>
        <p className='text-zinc-50 text-8xl font-semibold'>Pro all out.</p>
        </div>
        {/* <video className='w-[90vw] mx-[4vw] rounded-2xl' autoplay loop muted src="m4chip.mp4"/> */}

<video autoPlay muted loop className='w-[90vw] mx-[4vw] rounded-2xl'>
  <source src="https://www.apple.com/105/media/us/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/performance/large_2x.mp4" type="video/mp4" />
</video>

    </div>
  )
}

export default M4Chip