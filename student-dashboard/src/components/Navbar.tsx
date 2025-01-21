import React from 'react'
import Image from 'next/image'

function Navbar() {
    return (
        <div className='flex justify-between items-center p-4'>
            {/* search bar */}
            <div className='md:flex items-center gap-2 hidden px-2 rounded-full ring-[1.5px] ring-gray-300 text-xs'>
                <Image src="/search.png" alt='' width={14} height={14}></Image>
                <input type="text" placeholder='search...' className='bg-transparent p-2 w-[200px] outline-none'/>
            </div>
            {/* Icons */}
            <div className='flex justify-end items-center gap-6 w-full'>
                <div className='flex justify-center items-center bg-white rounded-full w-7 h-7 cursor-pointer'>
                    <Image src="/message.png" alt='' width={20} height={20}></Image>
                </div>
                <div className='relative flex justify-center items-center bg-white rounded-full w-7 h-7 cursor-pointer'>
                    <Image src="/announcement.png" alt='' width={20} height={20}></Image>
                    <div className='-top-3 -right-3 absolute flex justify-center items-center bg-purple-500 rounded-full w-5 h-5 text-white text-xs'>1</div>
                </div>
                <div className='flex flex-col'>
                    <span className='font-medium text-xs leading-3'>Jaanu</span>
                    <span className='text-right text-[10px] text-gray-500'>Admin</span>
                </div>
                <Image src="/avatar.png" alt='' height={36} width={36} className='rounded-full'></Image>
            </div>
        </div>
    )
}

export default Navbar
