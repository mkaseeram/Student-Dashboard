import TableSearch from '@/components/TableSearch'
import React from 'react'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import Link from 'next/link'
import { role, studentsData } from '@/lib/data'
import FormModal from '@/components/FormModal'

type Student = {
    id: number;
    studentId: string;
    name: string;
    email?: string;
    photo: string;
    phone?: string;
    grade: number;
    class: string;
    address: string;
  };
  
  const columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Student ID",
      accessor: "studentId",
      className: "hidden md:table-cell",
    },
    {
      header: "Grade",
      accessor: "grade",
      className: "hidden md:table-cell",
    },
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden lg:table-cell",
    },
    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];

function StudentListPage() {

    const renderRow = (item: Student) => (
        <tr key={item.id} className='border-gray-200 hover:bg-janPurpleLight even:bg-slate-50 border-b text-sm'>
            <td className='flex items-center gap-4 p-4'>
                <Image src={item.photo} alt='' width={40} height={40} className='xl:block md:hidden rounded-full w-10 h-10 object-cover' />
                <div className="flex flex-col">
                    <h3 className='font-semibold'>{item.name}</h3>
                    <p className='to-gray-500 text-xs'>{item.class}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.studentId}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className='flex justify-center items-center bg-janSky rounded-full w-7 h-7'>
                            <Image src="/view.png" alt='' width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        // <button className='flex justify-center items-center bg-janPurple rounded-full w-7 h-7'>
                        //     <Image src="/delete.png" alt='' width={16} height={16} />
                        // </button>
                        <FormModal table='student' type='delete' id={item.id}/>
                    )}
                </div>
            </td>
        </tr>
    )

    return (
        <div className='flex-1 bg-white m-4 mt-0 p-4 rounded-md'>
            {/* Top */}
            <div className="flex justify-between items-center">
                <h1 className="md:block hidden font-semibold text-xl">All Students</h1>
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
                        <FormModal table='student' type='create' />
                    )}
                    </div>
                </div>
            </div>
            {/* List */}
            <Table columns={columns} renderRow={renderRow} data={studentsData} />
            {/* Pagination */}
            <Pagination />
        </div>
    )
}

export default StudentListPage
