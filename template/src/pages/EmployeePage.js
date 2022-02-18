import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { UilExport, UilFilter } from "@iconscout/react-unicons";
import demoAvt from "../assets/img/avt_demo.jpg";
import TableEmployee from "../components/table/TableEmployee";
function EmployeePage(props) {
  const { employees, fetchEmployees } = props;
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
  ];

  return (
    <div className="font-medium text-sm">
      <div className="h-12 bg-slate-200 flex justify-between items-center px-5 shadow border-b border-gray-300">
        <div>
          <span>Total:</span>
          <span className="text-blue-700 mx-2">#</span>
        </div>
        <div className="text-white flex items-center ">
          <Link
            to="add"
            className=" bg-sky-600 px-2 py-1 rounded hover:bg-sky-700 ml-2"
          >
            Add
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
          <UilFilter className="text-gray-500 w-5 h-5 font-normal ml-3" />
        </div>
      </div>

      <div className="">
        <TableEmployee datas={employees} columns={columns} />
      </div>
      <div className="py-4">Next</div>
    </div>
  );
}

EmployeePage.propTypes = {
  employees: PropTypes.array.isRequired,
  fetchEmployees: PropTypes.func,
};
EmployeePage.defaultProps = {
  fetchEmployees: null,
};
export default EmployeePage;
