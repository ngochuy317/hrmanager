// import { useState } from 'react'
import { UilAngleLeft,UilAngleRight } from '@iconscout/react-unicons'


function Pagination({amountPerPage, currentPage, totalPages, paginate, amountItem}) {
    const pageNumber = []
    for(let i = 1; i <= Math.ceil(totalPages / amountPerPage); i++) {
            pageNumber.push(i)
    }
 
    return (
        <div className="flex item-content w-fit">
            <ul className="flex divide-x border border-violet-500 items-center w-fit">
                <li key="0">
                    <button disabled={currentPage <= 1} onClick={() => paginate(currentPage-1)} className={`${currentPage <= 1 ? "text-gray-400": "hover:bg-gray-300 text-violet-500"}  py-1.5 px-2  `}>
                           <UilAngleLeft/>
                    </button>
                </li>
                {pageNumber.map(number => {
                    return(
                    <li key={number}>
                        <button onClick={()=> {paginate(number)}} className="hover:bg-gray-300 py-1.5 px-3  text-violet-500">
                            {number}
                        </button>
                    </li>)
                })}
                <li key={pageNumber.length + 1}>
                    <button disabled={currentPage >= pageNumber.length} onClick={() => paginate(currentPage+1)}  className={`${currentPage >= pageNumber.length? "text-gray-400": "hover:bg-gray-300 text-violet-500"}  py-1.5 px-2  `}>
                         <UilAngleRight/>
                    </button>
                </li>
            </ul>
            <select onChange={(e)=> amountItem(parseInt(e.target.value))} className="ml-3 border border-violet-500 py-1.5 px-2 bg-gray-50 font-medium text-violet-600 focus:outline-none">
                <option value="10">10 / page </option>
                <option value="15">15 / page</option>
                <option value="25">25 / page</option>
            </select>
        </div>
    )
}

export default Pagination