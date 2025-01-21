import React from 'react'

function Table({
    columns,
    renderRow,
    data
}:{
    columns:{header:string; accessor:string, className?:string}[];
    renderRow:(items:any)=> React.ReactNode;
    data:any[];
}) {
  return (
    <table className="mt-4 w-full">
        <thead>
        <tr className='text-gray-500 text-left'>
            {
                columns.map(col=>(
                    <th key={col.accessor} className={col.className}>{col.header}</th>
                ))
            }
        </tr>
        </thead>
        <tbody>{data.map((item)=>renderRow(item))}</tbody>
    </table>
  )
}

export default Table