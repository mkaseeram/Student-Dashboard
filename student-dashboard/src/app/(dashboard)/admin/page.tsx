import Annoncements from '@/components/Annoncements'
import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalendar from '@/components/EventCalendar'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'


export default function AdminPage() {
    return (
        <div className='flex p-4 gap-4 flex-col md:flex-row'>
            {/* LEFt */}
            <div className='w-full lg:w-2/3 flex flex-col gap-8'>
                {/* User careds */}
                <div className='flex gap-4 justify-between flex-wrap'>
                    <UserCard type='student' />
                    <UserCard type='teacher' />
                    <UserCard type='parent' />
                    <UserCard type='staff' />
                </div>
                {/* Middle Chart */}
                <div className=' flex flex-col lg:flex-row gap-4'>
                    {/* Count Chart */}
                    <div className='w-full lg:w-1/3 h-[450px]'>
                    <CountChart/>
                    </div>
                    {/* Attendence Chart */}
                    <div className='w-full lg:w-2/3 h-[450px]'>
                    <AttendanceChart/>
                    </div>
                </div>
                {/* Bottom Chart */}
                <div className="w-full h[500px]">
                    <FinanceChart/>
                </div>
            </div>
            {/* right */}
            <div className=' w-full lg:w-1/3 flex flex-col gap-8'>
            <EventCalendar/>
            <Annoncements/>
            </div>
        </div>
    )
}
