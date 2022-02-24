import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { FilterIcon } from '@heroicons/react/outline'
import demoAvt from "../../assets/img/avt_demo.jpg";
import TableView from "../../components/table/tableView";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees, deleteEmployee } from "../../redux/actions/employeeAct";
import Pagination from '../../components/pagination/Pagination'
function EmployeePage() {
  const employeeList = useSelector(state => state.employees.list)
  const dispatch = useDispatch()
  
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [amountPerPage, setAmountPerPage] = useState(10)
 
  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      dispatch(fetchEmployees());
      setLoading(false);
    }
    fetchList()
  }, []);

  function handleBtnDelete(id){
      dispatch(deleteEmployee(id))
  }
  // Get current posts
  const indexOfLastPage = currentPage * amountPerPage
  const indexOfFirstPage = indexOfLastPage - amountPerPage
  const currentList = employeeList.slice(indexOfFirstPage,indexOfLastPage)
  const totalPages = employeeList.length
  const handlesPaginate = (pageNumber) => setCurrentPage(pageNumber)
  const handlesAmountItem = (value) => setAmountPerPage(value)
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      render: (ojb) => (
        <Link to={`/employee/${ojb.id}/detail`} className="flex items-center">
          <div className="flex-shrink-0">
            <img
              src={ojb.avatar ? ojb.avatar : demoAvt}
              alt="avt"
              className="w-9 h-9 rounded-full object-cover object-center"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{ojb.name}</div>
            <div className="text-sm font-normal text-gray-500">{ojb.email}</div>
          </div>
        </Link>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (ojb) => (
        <div
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            ojb.status
              ? "bg-green-100 text-green-600"
              : "bg-rose-100 text-rose-600"
          }`}
        >
          {ojb.status ? "Hoạt động" : "Tạm dừng"}
        </div>
      ),
    },
    {
      title: "Phòng ban",
      dataIndex: "department_name",
      key: "department",
    },
    {
      title: "Quản lý",
      dataIndex: "manager_name",
      key: "manager",
    },
    {
      title: "Ngày tham gia",
      dataIndex: "joindate",
      key: "joindate",
    },
    {
      title: "",
      dataIndex: "control",
      key: "control",
      render: (ojb) => (
        <div className="flex">
         <Link to={`${ojb.id}/edit`}><div className="text-white px-2.5 py-1.5 bg-blue-500 mx-1 hover:bg-blue-600"> Sửa </div></Link>
         <button onClick={()=>handleBtnDelete(ojb.id)} className="font-medium text-white px-2.5 mx-1 py-1.5 bg-rose-500 hover:bg-rose-600" >Xoá</button>
        </div>
      ),
    },
  ];

  return (
    <div className="font-medium text-sm">
      <div className="h-12 bg-slate-200 flex justify-between items-center px-5 shadow border-b border-gray-300">
        <div className="flex items-center">
          <div>
            <span>Tổng số:</span>
            <span className="text-blue-700 mx-2">{totalPages}</span>
          </div>
          <div className="mx-5">
          <input className="bg-slate-200 placeholder-gray-800 px-2 hidden sm:block py-0.5 w-44 rounded-lg border border-gray-500 focus:bg-slate-100 focus:outline-none"
                        placeholder="Tìm kiếm nhân viên ..." />
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
            className=" bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2"
          >
            Nhập
          </Link>
          <Link
            to="add"
            className=" bg-violet-500 px-2 py-1 hover:bg-violet-600 ml-2"
          >
            <span>Xuất</span>
          </Link>
          <FilterIcon className="text-gray-500 w-5 h-5 font-normal ml-3 hover:text-gray-800" />
        </div>
      </div>

      <div className="">
        <TableView datas={currentList} loading={loading} columns={columns} />
      </div>
      <div className="my-5 mx-5 flex justify-end">
        <Pagination 
          amountPerPage={amountPerPage} 
          currentPage={currentPage} 
          totalPages={totalPages} 
          paginate={handlesPaginate} 
          amountItem={handlesAmountItem}
        />
      </div>
    </div>
  );
}

export default EmployeePage;
