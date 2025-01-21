import TableSearch from '@/components/TableSearch'
import React from 'react'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import Link from 'next/link'
import { assignmentsData, classesData, eventsData, examsData, lessonsData, resultsData, role } from '@/lib/data'
import FormModal from '@/components/FormModal'

type Event = {
    id: number;
    title: string;
    class: string;
    date: string;
    startTime: string;
    endTime: string;
  };
  
  const columns = [
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Class",
      accessor: "class",
    },
    {
      header: "Date",
      accessor: "date",
      className: "hidden md:table-cell",
    },
    {
      header: "Start Time",
      accessor: "startTime",
      className: "hidden md:table-cell",
    },
    {
      header: "End Time",
      accessor: "endTime",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];

function EventListPage () {

    const renderRow = (item: Event) => (
        <tr key={item.id} className='border-gray-200 hover:bg-janPurpleLight even:bg-slate-50 border-b text-sm'>
            <td className="flex items-center gap-4 p-4">{item.title}</td>
            <td>{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td className="hidden md:table-cell">{item.startTime}</td>
            <td className="hidden md:table-cell">{item.endTime}</td>
            <td>
                <div className="flex items-center gap-2">
                    {/* <Link href={`/list/teachers/${item.id}`}>
                        <button className='flex justify-center items-center bg-janSky rounded-full w-7 h-7'>
                            <Image src="/edit.png" alt='' width={16} height={16} />
                        </button>
                    </Link> */}
                    {role === "admin" && (
                        // <button className='flex justify-center items-center bg-janPurple rounded-full w-7 h-7'>
                        //     <Image src="/delete.png" alt='' width={16} height={16} />
                        // </button>
                        <>
                        <FormModal table='event' type='update' data={item}/>
                        <FormModal table='event' type='delete' id={item.id}/>
                        </>
                    )}
                </div>
            </td>
        </tr>
    )

    return (
        <div className='flex-1 bg-white m-4 mt-0 p-4 rounded-md'>
            {/* Top */}
            <div className="flex justify-between items-center">
                <h1 className="md:block hidden font-semibold text-xl">All Events</h1>
                <div className="flex md:flex-row flex-col items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className='flex justify-center items-center bg-janYellow rounded-full w-8 h-8'>
                            <Image src="/filter.png" alt='' width={14} height={14} />
                        </button>
                        <button className='flex justify-center items-center bg-janYellow rounded-full w-8 h-8'>
                            <Image src="/sort.png" alt='' width={14} height={14} />
                        </button>
                        {role === "admin" && (
                        //     <button className='flex justify-center items-center bg-janYellow rounded-full w-8 h-8'>
                        //     <Image src="/plus.png" alt='' width={14} height={14} />
                        // </button>
                        <FormModal table='event' type='create' />
                    )}
                    </div>
                </div>
            </div>
            {/* List */}
            <Table columns={columns} renderRow={renderRow} data={eventsData} />
            {/* Pagination */}
            <Pagination />
        </div>
    )
}

export default EventListPage