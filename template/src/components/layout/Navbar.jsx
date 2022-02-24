import React from 'react'

function Navbar({user, signOut}) {
    return (
        <div className="w-full shadow bg-violet-500 sticky top-0 ">
            <div className="grid grid-cols-12 h-12 items-center text-white">
                <div className="mx-5 font-medium text-lg">HRManagements</div>
                {/* <div className="col-end-8 col-span-2">
                    <input className="bg-sky-500 placeholder-gray-200 px-3 hidden sm:block py-1 w-60 rounded-lg border border-gray-200 focus:outline-none"
                        placeholder="Search ..." />
                </div> */}
                <div className="col-end-13 col-span-4 justify-end flex items-center text-white">
                    <div className='mr-3 text-sm hover:text-violet-700'> <span className="font-medium">{user.name}</span> <span>{`(${user.role})`}</span> </div>
                    <button onClick={signOut} className="mr-5 bg-rose-500 px-3 font-medium py-1 hover:bg-rose-600 hover:text-white">Đăng xuất</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar