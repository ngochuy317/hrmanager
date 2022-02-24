import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { FilterIcon } from '@heroicons/react/outline'
import {useSelector, useDispatch} from "react-redux"
import {fetchDerpartments} from "../../redux/actions/departmentAction"
function DepartmentPage() {
  const departmentList = useSelector(state => state.departments.list)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchList = async () => {
      dispatch(fetchDerpartments());
    }
    fetchList()
  }, []);

  return (
    <div className="font-medium text-sm">
      <div className="h-12 bg-slate-200 flex justify-between items-center px-5 shadow border-b border-gray-300">
        <div className="flex items-center">
          <div>
            <span>Tổng số :</span>
            <span className="text-blue-700 mx-2">10</span>
          </div>
          <div className="mx-5">
          <input className="bg-slate-200 placeholder-gray-800 px-2 hidden sm:block py-0.5 w-44 rounded-lg border border-gray-500 focus:bg-slate-100 focus:outline-none"
                        placeholder="Tìm kiếm phòng ban ..." />
          </div>
        </div>
        <div className="text-white flex items-center ">
          <Link
            to="create"
            className=" bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
          >
            Tạo mới
          </Link>

          <Link
            to="add"
            className=" bg-violet-500 px-2 py-1 hover:bg-violet-600 ml-2"
          >
            <span>Xuất PDF</span>
          </Link>
          <FilterIcon className="text-gray-500 w-5 h-5 font-normal ml-3 hover:text-gray-800" />
        </div>
      </div>
    <div>
    <ul className="grid grid-cols-4 gap-10 mx-10 my-10 text-white">
        {departmentList.map( item =>{
            return(
                <li key={item.id} className="w-64 divide-y bg-white shadow">
                  <Link to={`${item.id}/detail`}>
                    <div className="bg-gray-500 text-lg px-3 py-2 flex justify-between items-center">
                        <span>{item.name}</span>
                        <span className={`${item.status? "bg-green-400" :"bg-rose-500"} inline-flex rounded-full h-4 w-4 `}></span>
                    </div>
                    <div className="text-gray-800 font-normal px-3 py-2 flex justify-between"> <span>Số điện thoại</span> <span>{item.phone}</span>  </div>
                    <div className="text-gray-800 font-normal px-3 py-2 flex justify-between"> <span>Số lượng nhân viên</span> <span>12</span>  </div>
                    <div className="text-gray-800 font-normal px-3 py-2 flex justify-between"> <span>Quản lý</span> <span>Đỗ Anh Duy</span>  </div>
                    </Link>
                </li>
            )} 
        )}
    </ul>
    </div>
    </div>
  )
}

export default DepartmentPage