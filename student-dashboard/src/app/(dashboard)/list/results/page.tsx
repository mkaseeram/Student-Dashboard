import TableSearch from '@/components/TableSearch'
import React from 'react'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import Link from 'next/link'
import { assignmentsData, classesData, examsData, lessonsData, resultsData, role } from '@/lib/data'
import FormModal from '@/components/FormModal'

type Result = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    student: string;
    type: "exam" | "assignment";
    date: string;
    score: number;
};

const columns = [
    {
        header: "Subject Name",
        accessor: "name",
    },
    {
        header: "Student",
        accessor: "student",
    },
    {
        header: "Score",
        accessor: "score",
        className: "hidden md:table-cell",
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Class",
        accessor: "class",
        className: "hidden md:table-cell",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

function ResultListPage () {

    const renderRow = (item: Result) => (
        <tr key={item.id} className='border-gray-200 hover:bg-janPurpleLight even:bg-slate-50 border-b text-sm'>
            <td className="flex items-center gap-4 p-4">{item.subject}</td>
            <td>{item.student}</td>
            <td className="hidden md:table-cell">{item.score}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td className="hidden md:table-cell">{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
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
                        <FormModal table='result' type='update' data={item}/>
                        <FormModal table='result' type='delete' id={item.id}/>
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
                <h1 className="md:block hidden font-semibold text-xl">All Results</h1>
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
                        <FormModal table='result' type='create' />
                    )}
                    </div>
                </div>
            </div>
            {/* List */}
            <Table columns={columns} renderRow={renderRow} data={resultsData} />
            {/* Pagination */}
            <Pagination />
        </div>
    )
}

export default ResultListPage
