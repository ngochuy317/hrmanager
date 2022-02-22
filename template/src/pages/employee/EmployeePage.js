import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PencilAltIcon,TrashIcon,FilterIcon } from '@heroicons/react/outline'
import demoAvt from "../../assets/img/avt_demo.jpg";
import TableView from "../../components/table/tableView";

function EmployeePage(props) {
  const { employees, fetchEmployees,deleteEmployee } = props;
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const columns = [
    {
      title: "Name",
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
      title: "Status",
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
          {ojb.status ? "Active" : "Disabled"}
        </div>
      ),
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Manager",
      dataIndex: "parent",
      key: "manager",
    },
    {
      title: "Admission Date",
      dataIndex: "joindate",
      key: "joindate",
    },
    {
      title: "",
      dataIndex: "control",
      key: "control",
      render: (ojb) => (
        <div className="flex">
         <Link to={`${ojb.id}/edit`}><PencilAltIcon className="h-6 w-6 hover:text-blue-600 mx-2"/></Link>
         <button onClick={deleteEmployee.bind(this,ojb.id)} ><TrashIcon className="h-6 w-6 hover:text-rose-600 mx-2"/></button>
        </div>
      ),
    },
  ];

  return (
    <div className="font-medium text-sm">
      <div className="h-12 bg-slate-200 flex justify-between items-center px-5 shadow border-b border-gray-300">
        <div className="flex items-center">
          <div>
            <span>Total:</span>
            <span className="text-blue-700 mx-2">#</span>
          </div>
          <div className="mx-5">
          <input className="bg-slate-200 placeholder-gray-800 px-2 hidden sm:block py-0.5 w-44 rounded-lg border border-gray-500 focus:bg-slate-100 focus:outline-none"
                        placeholder="Search employee ..." />
          </div>
        </div>
        <div className="text-white flex items-center ">
          <Link
            to="create"
            className=" bg-sky-600 px-2 py-1 rounded hover:bg-sky-700 ml-2"
          >
            Create
          </Link>
          <Link
            to="add"
            className=" bg-sky-600 px-2 py-1 rounded hover:bg-sky-700 ml-2"
          >
            Import
          </Link>
          <Link
            to="add"
            className="flex item-center bg-sky-600 px-2 py-1 rounded hover:bg-sky-700 ml-2"
          >
            <span>Export</span>
          </Link>
          <FilterIcon className="text-gray-500 w-5 h-5 font-normal ml-3 hover:text-gray-800" />
        </div>
      </div>

      <div className="">
        <TableView datas={employees} columns={columns} />
      </div>
      <div className="py-4">Next</div>
    </div>
  );
}

EmployeePage.propTypes = {
  employees: PropTypes.array.isRequired,
  fetchEmployees: PropTypes.func,
  deleteEmployee: PropTypes.func,
};
EmployeePage.defaultProps = {
  fetchEmployees: null,
  deleteEmployee: null,
};
export default EmployeePage;
