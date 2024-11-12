import React from 'react'

const Nav = () => {
  return (
    <nav className='h-16 transparant pt-3  fixed backdrop-blur-lg '>
    <ul className='flex text-zinc-400 gap-12 justify-center items-center ml-[20vw] font-[600] cursor-pointer'>
     <li className='w-7'><img src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/apple-512.png" /></li>
     <li>Store</li>
     <li>Mac</li>
     <li>iPad</li>
     <li>iPhone</li>
     <li>Watch</li>
     <li>AirPods</li>
     <li>TV & Home</li>
     <li>Entertainment</li>
     <li>Accessories</li>
     <li>Support</li>
     <li className='w-7'><img src='https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/search-893.png' /></li>
     <li className='w-7'><img src='https://cdn.icon-icons.com/icons2/2785/PNG/512/shopping_bag_add_icon_177353.png' /></li>
    </ul>
  </nav>
  )
}

export default Nav