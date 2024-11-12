import React from 'react'
import Slider from './Slider'

const NeonHelloCard = () => {
  return (
    <div className='h-screen w-full px-[20vw] pt-[30vh] bg-zinc-900'>
        <div className='bg-black rounded-xl pt-[3vh] px-[4vw] h-[40vh] w-[60vw] flex gap-4'>
        <div className='pt-[10vh]'>
            <p className='text-4xl font-semibold text-zinc-50 '>See the new macbook pro in action</p>
            <p className='text-xl font-semibold text-blue-700 '>Watch the announcement             <span className='ml-10'>Watch in ASL</span></p>
            
        </div>

        <div>
            <img className='w-[30vw]' src={"./hello.jpg"}/>
        </div>
    </div>

    
    </div>
  )
}

export default NeonHelloCard