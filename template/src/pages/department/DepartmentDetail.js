import {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {fetchEmployees} from '../../redux/actions/employeeAct'
import Pagination from '../../components/pagination/Pagination';
function DepartmentDetail() {
  const { departmentId } = useParams();
  const listEmployee = useSelector(state => state.employees.list).filter(item => item.department == departmentId )
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchEmployees())
  },[])

  console.log(listEmployee)
  return (
    <div className="font-medium bg-white pb-5">
      <div className="h-12 bg-slate-200 text-sm flex justify-end items-center px-5 shadow border-b border-gray-300">
        <div className="text-white flex items-center ">
          <Link
            to="create"
            className=" bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
          >
            Sửa
          </Link>
          <Link
            to="add"
            className=" bg-rose-500 px-2 py-1  hover:bg-rose-600 ml-2"
          >
            Xoá
          </Link>
          <Link
            to="add"
            className=" bg-violet-500 px-2 py-1 hover:bg-violet-600 ml-2"
          >
            <span>Xuất PDF</span>
          </Link>
        </div>
      </div>
    <div className='px-10  divide-y'>
        <div className="text-xl py-5 text-gray-700">Thông tin phòng ban</div>
        <div className="grid grid-cols-4 gap-4  ">
            <div className="col-span-4 bg-violet-600 text-xl text-white px-3 py-2 flex justify-center items-center">
                <span className=" font-normal mr-2">Tên phòng:</span>
                <span>P001</span>
            </div>
            <div  className="px-3 py-2 col-span-2">
                <span className=" font-normal mr-2">Số điện thoại :</span>
                <span>093600011</span>
            </div>
            <div  className="px-3 py-2 col-span-2">
                <span className=" font-normal mr-2">Quản lý :</span>
                <span>Đỗ Anh Duy</span>
            </div>
        </div>
        <div className="px-3 pt-5 text-lg">Danh sách nhân viên</div>
        <div className="align-middle border first-letter my-5">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200">
                    <tr>
                    <th className="px-4 py-1.5 text-left text-xs text-gray-500 uppercase tracking-wider">Id</th>
                    <th className="px-4 py-1.5 text-left text-xs text-gray-500 uppercase tracking-wider">Tên</th>
                    <th className="px-4 py-1.5 text-left text-xs text-gray-500 uppercase tracking-wider">Số điện thoại</th>
                    <th className="px-4 py-1.5 text-left text-xs text-gray-500 uppercase tracking-wider">Email</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                    {listEmployee.map(employee =>{
                        return (
                        <tr key={employee.id}>
                            <td className="px-4 py-1.5 whitespace-nowrap text-gray-600" >{employee.id}</td>
                            <td className="px-4 py-1.5 whitespace-nowrap text-gray-600">{employee.name}</td>
                            <td className="px-4 py-1.5 whitespace-nowrap text-gray-600">{employee.phone}</td>
                            <td className="px-4 py-1.5 whitespace-nowrap text-gray-600">{employee.email}</td>
                        </tr>
                        )
                    })} 
                </tbody>
            </table>
        </div>
        </div>
        <div className="flex w-full justify-end px-10">
            <Pagination />
        </div>
    </div>
  )
}

export default DepartmentDetail