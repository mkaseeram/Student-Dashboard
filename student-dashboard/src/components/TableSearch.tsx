import Image from 'next/image'
import React from 'react'

function TableSearch() {
    return (
        <div className='flex items-center gap-2 px-2 rounded-full ring-[1.5px] ring-gray-300 w-full md:w-auto text-xs'>
            <Image src="/search.png" alt='' width={14} height={14}></Image>
            <input type="text" placeholder='search...' className='bg-transparent p-2 w-[200px] outline-none' />
        </div>
    )
}

export default TableSearch
