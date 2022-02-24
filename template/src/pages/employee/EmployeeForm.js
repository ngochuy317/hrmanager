import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import {connect} from "react-redux"
import {addEmployee} from '../../redux/actions/employeeAct'
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
    title: 'Add New Employee',
    employee: {},
  });

function EmployeeForm(props) {
    const {title, employee, addEmployee} = props
    const { register, handleSubmit, formState: { errors }} = useForm({defaultValue: employee})
    
    const onSubmit = (data) => {
        addEmployee(data)
    }
    
    return (
    <div className="mx-10 my-8 text-gray-600">
        <div className="text-xl font-medium mb-10">{title}</div>
        <div className="text-rose-600">
            {errors.name && errors.birthday && errors.joindate && errors.email &&  errors.phone &&
            <span>Please enter enough information!</span>}
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="grid-cols-2 grid my-3">
                <div className="grid grid-cols-6 gap-4 ">
                    
                    <div className="col-span-6 flex flex-col">
                        <span className="text-sm mb-2">Họ và tên</span>
                        <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500" 
                            {...register("name",{ required: true })}
                        />
                    </div>
                    <div className="col-span-3 flex flex-col">
                        <span className="text-sm mb-2">Giới tính</span>
                        <select {...register("gender")} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500">
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>
                    <div className="col-span-3 flex flex-col">
                        <span className="text-sm mb-2">Trình trạng hôn nhân</span>
                        <select {...register("marital")} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500">
                            <option value="single">Độc thân</option>
                            <option value="married">Kết hôn</option>
                            <option value="cohabitant">Sống thử</option>
                            <option value="divorced">Ly dị</option>
                        </select>
                    </div>
                    <div className="col-span-3 flex flex-col">
                        <span className="text-sm mb-2">Ngày sinh</span>
                        <input type="date" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500" 
                            {...register("birthday",{ required: true })}
                        />
                    </div>
                    <div className="col-span-3 flex flex-col">
                        <span className="text-sm mb-2">Số điện thoại</span>
                        <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500" 
                            {...register("phone",{ required: true })}
                        />
                    </div>
                    <div className="col-span-6 flex flex-col">
                        <span className="text-sm mb-2">Email</span>
                        <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500" 
                            {...register("email",{ required: true })}
                        />
                    </div>
                    <div className="col-span-3 flex flex-col">
                        <span className="text-sm mb-2">Thể loại</span>
                        <select {...register("employee_type")} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500">
                            <option value="employee">Nhân viên</option>
                            <option value="student">Học sinh</option>
                            <option value="intern">Thực tập</option>
                            <option value="freelancer">Làm tự do</option>
                        </select>
                    </div>
                    <div className="col-span-3 flex flex-col">
                        <span className="text-sm mb-2">Join Date</span>
                        <input type="date" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500" 
                            {...register("joindate",{ required: true })}
                        />
                    </div>
                    <div className="col-span-3 flex flex-col">
                        <span className="text-sm mb-2">Maneger</span>
                        <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500" 
                            {...register("parent",{ setValueAs: v => v ? parseInt(v) : null })}
                        />
                        {/* <select {...register("employee_type")} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500">
                            <option value="">Select</option>
                        </select> */}
                    </div>
                    <div className="col-span-3 flex flex-col">
                        <span className="text-sm mb-2">Wage Rate</span>
                        <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500" 
                            {...register("wage_rate",{ setValueAs: v => v ? parseInt(v) : null })}
                        />
                        {/* <select {...register("employee_type")} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500">
                            <option value="">Select</option>
                        </select> */}
                    </div>
                    <div className="col-span-6 flex flex-col">
                        <span className="text-sm mb-2">Department</span>
                        <input type="text" className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500" 
                            {...register("department",{ setValueAs: v => v ? parseInt(v) : null })}
                        />
                        {/* <select {...register("employee_type")} className="px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500">
                            <option value="">Select</option>
                        </select> */}
                    </div>
                    <div className="col-span-6">
                        <span className="text-sm mr-5">
                            Active Employee
                        </span>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input  {...register("status")} type="checkbox" className="checked:bg-violet-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                                </label>
                        </div> 
                    </div>
                </div>
            </div>
            <div>
                <button type="submit" className="mr-2 text-white font-medium w-36 h-10 bg-violet-500 rounded-full hover:bg-violet-600">Save</button>
                <Link to={'/employee'}><button type="button" className="mr-2 text-gray-500  w-36 h-10 font-medium bg-gray-200 rounded-full hover:bg-gray-300">Cancel</button></Link>
            </div>
        </form>
    </div>
  )
}

EmployeeForm.propTypes = {
    title: PropTypes.string,
    employee: PropTypes.object,
    listEmp: PropTypes.array.isRequired,
    addEmployee: PropTypes.func.isRequired,
}
EmployeeForm.defaultProps = {
    title: '',
    employee: {},
    listEmp: [],
    addEmployee: null,
}
export default connect(mapStateToProps,{addEmployee})(EmployeeForm)
