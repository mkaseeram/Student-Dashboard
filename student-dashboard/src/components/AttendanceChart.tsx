"use client"

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
        name: 'Mon',
        present: 60,
        absent: 30,
    },
    {
        name: 'Tue',
        present: 90,
        absent: 10,
    },
    {
        name: 'Wed',
        present: 76,
        absent: 20,
    },
    {
        name: 'Thu',
        present: 82,
        absent: 17,
    },
    {
        name: 'Fri',
        present: 30,
        absent: 60,
    },
    {
        name: 'Sat',
        present: 10,
        absent: 90,
    },
];

import React from 'react'

function AttendanceChart() {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}></Image>
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <Tooltip contentStyle={{ borderColor: "light", borderRadius: "10px" }} />
                    <Legend
                        align='left'
                        verticalAlign='top'
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar
                        dataKey="present"
                        fill="#C3EBFA"
                        activeBar={<Rectangle />}
                        legendType='circle'
                        radius={[10, 10, 0, 0]}
                    />

                    <Bar
                        dataKey="absent"
                        fill="#FAE27C"
                        activeBar={<Rectangle />}
                        legendType='circle'
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AttendanceChart
