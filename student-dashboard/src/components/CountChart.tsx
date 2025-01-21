"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 119,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 39,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count:80,
        fill: '#C3EBFA',
    },
];


function CountChart() {
    return (
        <div className='bg-white w-full h-full rounded-xl p-4'>
            {/* Title */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Student</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            {/* Chart */}
            <div className='w-full h-[75%] relative'>
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={30} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt='' width={50} height={50} className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            {/* Bottom */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-janSky rounded-full' />
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>boys (55%)</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-janYellow rounded-full' />
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChart