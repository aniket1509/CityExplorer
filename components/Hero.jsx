import React, { useState } from 'react'
import Image from 'next/image'
import category from '@/data/category'

const Hero = ({userInput}) => {

    const [search, setSearch] = useState('')

  return (
    <div className='text-center'>
        <div>
            <Image src="/bg.png" alt="background" 
            width={800} 
            height={200}
            className='w-full absolute mt-[-50px]'/> 
            <div className='mt-[70px]'>
                <h2 className='text-[70px] text-red-600 tracking-widest font-semibold'>Discover</h2>
                <h2 className='text-[28px]'>Your Amazing City</h2>
                <div className='mt-5 flex items-center gap-2 justify-center'>
                    <input type="text"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder='Search places in city'
                    className=' bg-white p-3 z-10
                    border-[1px] rounded-full px-5 w-[36%] 
                    shadow-lg outline-red-500'
                    />  
                    <button 
                    onClick={()=>userInput(search)}
                    className='bg-red-500 rounded-full
                    p-3 shadow-md z-10 
                    cursor-pointer hover:scale-105 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>

                    </button>
                </div>
                <div className='mt-5 flex flex-col justify-center items-center'> 
                    <h2>Or browse the category</h2>
                    <div className='grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-3 '>
                        {category.map((item,index)=>(
                            <div key={index} className='border-[1px] w-[60px] p-4 bg-white rounded-full z-10 hover:border-red-600 shadow-lg hover:scale-110 cursor-pointer transition-all'>
                                <Image src={item.icon} alt={item.name} width={30} height={30}/>
                            </div>
                        ))}
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero