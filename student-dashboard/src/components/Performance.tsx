"use client"
import Image from 'next/image';
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const data = [
    { name: 'Group A', value: 92, fill: "#C3EBFA" },
    { name: 'Group B', value: 8, fill: "#FAE27C" },
];

function Performance() {
    return (
        <div className='relative bg-white p-4 rounded-md h-80'>
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-xl">Performance</h1>
                <Image src="/moreDark.png" alt='' height={16} width={16} />
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        fill="#8884d8"
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="top-1/2 left-1/2 absolute text-center transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="font-bold text-3xl">9.2</h1>
                <p className='text-gray-300 text-xm'>of 10 max LTS</p>
            </div>
            <h2 className="right-0 bottom-16 left-0 absolute m-auto font-medium text-center">1st semester - 2nd semester</h2>
        </div>
    )
}

export default Performance
