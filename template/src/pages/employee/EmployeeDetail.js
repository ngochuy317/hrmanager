import React from 'react'
import {Link} from "react-router-dom"
function EmployeeDetail() {
  return (
  <div className="font-medium text-gray-700">
        <div className="h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300">
            <div className="text-white flex items-center ">
                <Link
                to="create"
                className=" bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
                >
                Edit
                </Link>
                <Link
                to="add"
                className=" bg-rose-500 px-2 py-1  hover:bg-rose-600 ml-2"
                >
                Delete
                </Link>
                <Link
                to="add"
                className=" bg-violet-500 px-2 py-1 hover:bg-violet-600 ml-2"
                >
                <span>Export</span>
                </Link>
            </div>
        </div>
        {/* Content */}
      
        <div className="w-full bg-white shadow p-10 flex">
            <div className="text-center flex-none">
                <img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-1/p160x160/122026078_1682898235212951_447120331317906618_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=QfAesCkqrzsAX8vUzAi&_nc_ht=scontent.fhan2-1.fna&oh=00_AT8rszb1tCIexybKPFW1IrpAZJIULt30Serga7RaQuhCdQ&oe=6230BFFA"
                    className="w-40 h-40 rounded-md object-cover object-center"
                    alt="avt" />
                <div className="text-2xl my-3" >Đỗ Anh Duy</div>
                <div className="py-1.5 px-2 rounded-full bg-green-100 text-green-600 my-3" >Hoạt động</div>
             </div>
             <div className="w-full h-fit mx-5 grid grid-cols-4 gap-4 ">
                    <div className="col-span-4 p-1 flex flex-col bg-gray-100">
                        <span className="mx-1 text-gray-600">Họ và tên</span>
                        <span className="px-3 py-1 text-lg">Đỗ Anh Duy</span>
                    </div> 
                    <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                        <span className="mx-1 text-gray-600">Giới tính</span>
                        <span className="px-3 py-1 text-lg">Nam</span>
                    </div> 
                    <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                        <span className="mx-1 text-gray-600">Hôn nhân</span>
                        <span className="px-3 py-1 text-lg">Độc thân</span>
                    </div> 
                    <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                        <span className="mx-1 text-gray-600">Ngày sinh</span>
                        <span className="px-3 py-1 text-lg">14-02-1997</span>
                    </div> 
                    <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                        <span className="mx-1 text-gray-600">Số điện thoại</span>
                        <span className="px-3 py-1 text-lg">0962819197</span>
                    </div> 
                    <div className="col-span-4 p-1 flex flex-col bg-gray-100">
                        <span className="mx-1 text-gray-600">Email</span>
                        <span className="px-3 py-1 text-lg">anhduycnttx1@gmail.com</span>
                    </div>
                    <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                        <span className="mx-1 text-gray-600">Thể loại</span>
                        <span className="px-3 py-1 text-lg">Nhân viên</span>
                    </div>
                    <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                        <span className="mx-1 text-gray-600">Ngày vào</span>
                        <span className="px-3 py-1 text-lg">01-01-2021</span>
                    </div>
                    <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                        <span className="mx-1 text-gray-600">Quản lý</span>
                        <span className="px-3 py-1 text-lg">null</span>
                    </div>
                    <div className="col-span-2 p-1 flex flex-col bg-gray-100">
                        <span className="mx-1 text-gray-600">Bậc Lương</span>
                        <span className="px-3 py-1 text-lg">5</span>
                    </div>
                    <div className="col-span-4 p-1 flex flex-col bg-gray-100">
                        <span className="mx-1 text-gray-600">Phòng ban</span>
                        <span className="px-3 py-1 text-lg">P001</span>
                    </div>
             </div>
        </div>
            
  </div>
  )
}

export default EmployeeDetail