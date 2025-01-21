import React from 'react'

function Pagination() {
  return (
    <div className='flex justify-between items-center gap-4 mt-4 text-gray-500'>
        <button disabled className="bg-slate-200 disabled:opacity-50 px-4 py-2 rounded-md font-semibold text-xs disabled:cursor-not-allowed"> prev</button>
        <div className="flex items-center gap-2 text-sm">
            <button className="bg-janSky px-2 rounded-sm">1</button>
            <button className="px-2 rounded-sm">2</button>
            <button className="px-2 rounded-sm">3</button>
            ...
            <button className="px-2 rounded-sm">10</button>
        </div>
        <button className="bg-slate-200 disabled:opacity-50 px-4 py-2 rounded-md font-semibold text-xs disabled:cursor-not-allowed">Next</button>
    </div>
  )
}

export default Pagination
