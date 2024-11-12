import React from 'react'

const Hero = () => {
  return (
    <div className='h-[100%] gap-0 pt-24 tracking-tighter bg-black' >
        <h1 className='text-zinc-50 text-4xl mb-0 ml-[44vw] font-bold'> MacBook Pro</h1>
        <img className='ml-[25vw] h-[20%] w-[50vw] mt-0' src={"./text.png"} />
        <img className='ml-[6vw] h-[20%] w-[90vw]'  src={"./macbook.jpg"} />

        <button className='text-white font-[700] w-24 h-12 bg-blue-700 rounded-full ml-[48vw] mt-[20vh]'>Buy</button>
        <p className='text-zinc-500  text-3xl font-semibold ml-[44vw] mt-[1vh]'>From ₹169900.00*</p>
        <p  className='text-zinc-500  text-2xl font-semibold ml-[38vw] mt-[3vh]' >Apple Intelligence available now in US English1</p>
    </div>
  )
}

export default Hero