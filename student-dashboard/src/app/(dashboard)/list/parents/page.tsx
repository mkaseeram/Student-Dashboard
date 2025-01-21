import TableSearch from '@/components/TableSearch'
import React from 'react'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import Link from 'next/link'
import { parentsData, role } from '@/lib/data'
import FormModal from '@/components/FormModal'

type Parent = {
    id: number;
    name: string;
    email?: string;
    students: string[];
    phone: string;
    address: string;
};

const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Student Names",
        accessor: "students",
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

function ParentListPage() {

    const renderRow = (item: Parent) => (
        <tr key={item.id} className='border-gray-200 hover:bg-janPurpleLight even:bg-slate-50 border-b text-sm'>
            <td className='flex items-center gap-4 p-4'>
                <div className="flex flex-col">
                    <h3 className='font-semibold'>{item.name}</h3>
                    <p className='to-gray-500 text-xs'>{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.students.join(",")}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    {/* <Link href={`/list/teachers/${item.id}`}>
                        <button className='flex justify-center items-center bg-janSky rounded-full w-7 h-7'>
                            <Image src="/edit.png" alt='' width={16} height={16} />
                        </button>
                    </Link> */}
                    {role === "admin" && (
                        <>
                            <FormModal table='parent' type='update' data={item} />
                            {/* <button className='flex justify-center items-center bg-janPurple rounded-full w-7 h-7'>
                                <Image src="/delete.png" alt='' width={16} height={16} />
                            </button> */}
                            <FormModal table='parent' type='delete' id={item.id} />
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
                <h1 className="md:block hidden font-semibold text-xl">All Parents</h1>
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
                            <FormModal table='parent' type='create' />
                        )}
                    </div>
                </div>
            </div>
            {/* List */}
            <Table columns={columns} renderRow={renderRow} data={parentsData} />
            {/* Pagination */}
            <Pagination />
        </div>
    )
}

export default ParentListPage
