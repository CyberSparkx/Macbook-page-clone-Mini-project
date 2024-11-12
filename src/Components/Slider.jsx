import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className=' w-[100vw] h-[100vh] bg-zinc-900 pl-[10vw]'>
        <p className='text-white text-5xl pb-14 font-semibold'>Get the highlights.</p>

        <div className='py-[2vh] px-[1vw] ml-10 w-[75vw] bg-zinc-950 rounded-xl'>
        <Swiper
         
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"
       >
         <SwiperSlide><video autoPlay loop muted src="https://www.apple.com/105/media/ww/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/highlights-center-stage/large_2x.mp4"></video></SwiperSlide>
 
         <SwiperSlide><video autoPlay loop muted src="https://www.apple.com/105/media/us/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/highlights-apple-intelligence/large_2x.mp4"></video></SwiperSlide>
 
 
         <SwiperSlide><video autoPlay loop muted src="https://www.apple.com/105/media/us/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/highlights-mx/large_2x.mp4"></video></SwiperSlide>
  
 
       </Swiper>
        </div>
    </div>
  )
}

export default Slider