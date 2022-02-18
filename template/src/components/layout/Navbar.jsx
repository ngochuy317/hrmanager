import React from 'react'
import { Link } from 'react-router-dom'
import { UilMobileVibrate, UilBell } from '@iconscout/react-unicons'
function Navbar() {
    return (
        <div className="w-full shadow bg-sky-500 sticky top-0 ">
            <div className="grid grid-cols-12 h-12 items-center text-white">
                <div className="mx-5 font-medium text-lg">HRManagements</div>
                <div className="col-end-8 col-span-2">
                    <input className="bg-sky-500 placeholder-gray-200 px-3 hidden sm:block py-1 w-60 rounded-lg border border-gray-200 focus:outline-none"
                        placeholder="Search ..." />

                </div>
                <div className="col-end-13 col-span-4 justify-end flex items-center">
                    <Link className='hover:text-blue-100 mr-3 font-medium text-sm' to={'/admin'}> Admin Panel </Link>
                    <UilMobileVibrate className="hover:text-blue-100 mr-3" />
                    <UilBell className="hover:text-blue-100 mr-3" />
                </div>
            </div>
        </div>
    )
}

export default Navbar