"use client"

import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: "27",
        title: "cold",
        time:"10/28/2040",
        discription: "major according pound whose clear customs beginning longer sight hour example complex cloth here ought everybody travel heard body silent pale farther thick research",
    },
    {
        id: "69",
        title: "said",
        time:"4/19/2093",
        discription: "reach chapter seems run observe because nor hat further range brave partly remove left shoot pleasure train pen dream customs just end kids company",
    },
    {
        id: "45",
        title: "three",
        time:"8/6/2047",
        discription: "information dish over also nails dull friend seen line sent few yellow than as him thread bent swung finish material neighbor meat smile stiff",
    },
    {
        id: "10",
        title: "classroom",
        time:"4/10/2024",
        discription: " won rear probably fighting cat force column function vegetable step occur successful shinning firm typical becoming life owner simple weak hat blue wife hurt",
    }
]

function EventCalendar() {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className=' bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className=' text-xl font-semibold my-4'>Events</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20}></Image>
            </div>
            <div className="flex flex-col gap-4">
                {
                    events.map(event=>(
                        <div className=' p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-janSky even:border-t-janPurple' key={event.id}>
                            <div className=" justify-between flex items-center">
                                <h1 className=' font-semibold text-gray-600'>{event.title}</h1>
                                <span className='text-gray-300 text-sm'>{event.time}</span>
                            </div>
                            <p className='mt-2 text-gray-400 text-sm'>{event.discription}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EventCalendar
