import Annoncements from '@/components/Annoncements'
import BigCalendar from '@/components/BigCalendar'
import EventCalendar from '@/components/EventCalendar'
import React from 'react'

function StudentPage() {
    return (
        <div className='flex xl:flex-row flex-col gap-4 p-4'>
            {/* Left */}
            <div className="w-full xl:w-2/3">
            <div className="bg-white p-4 rounded-md h-full">
                <h1 className='font-semibold text-xl'>Schedule (4A)</h1>
                <BigCalendar/>
            </div>
            </div>
            {/* Right */}
            <div className='flex flex-col gap-8 w-full xl:w-1/3'>
            <EventCalendar/>
            <Annoncements/>
            </div>
        </div>
    )
}

export default StudentPage
