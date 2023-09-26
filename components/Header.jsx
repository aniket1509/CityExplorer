import React from 'react'

function Header() {
  return (
    <div className='main flex items-center justify-between
     p-3 px-5  shadow-sm z-30'>
      <div className='left flex gap-3 items-center'>
        <img src='/logo.png' alt='logo'
        width={50} height={50}/>
        <h2 className='text-[25px] font-semibold
         hover:text-red-500 tracking-widest'>DISCOVER</h2>
      </div>
      <div className='right'>
        <ul className='flex gap-8 items-center font-semibold'>
            <li className='text-[20px]
            hover:text-red-500 cursor-pointer'>Home</li>
            <li className='text-[20px]
            hover:text-red-500 cursor-pointer'>About Us</li>
            <li className='text-[20px]
            hover:text-red-500 cursor-pointer'>Contact Us</li>
            <li className='text-[20px]
            hover:text-red-500 cursor-pointer'>Services</li>
        </ul>
      </div> 
    </div>
  )
}

export default Header