import React from 'react'
import Content from './Content'
import EmployeePage from '../../pages/employee/EmployeePage'
import EmployeeForm from '../../pages/employee/EmployeeForm'
import DepartmentPage from '../../pages/department/DepartmentPage'
import DepartmentDetail from '../../pages/department/DepartmentDetail'
import EmployeeDetail from '../../pages/employee/EmployeeDetail'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Login from "../login/Login"
import { Routes,Route } from "react-router-dom";
import Alerts from './Alerts'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {signOut} from '../../redux/actions/authActions'
MainLayout.propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    signOut: PropTypes.func
}
MainLayout.defaultProps = {
    user: {},
    isAuthenticated: false,
    signOut: null,
}
function MainLayout(props) {
    const { isAuthenticated, user, signOut } = props
    return (
        <React.Fragment>
        { isAuthenticated? <div className="relative">
            <Alerts/>
            <Navbar user = {user} signOut = {signOut}/>
            <Sidebar user = {user} />
            <Content>
                <Routes>
                    <Route path="/" element={<p>Home</p>} />
                    <Route path="/employee" element={<EmployeePage  />} />
                    <Route path="/employee/create" element={<EmployeeForm />} />
                    <Route path="/employee/:employeeId/detail" element={<EmployeeDetail />} />
                    <Route path="/department" element={<DepartmentPage />} />
                    <Route path="/department/:departmentId/detail" element={<DepartmentDetail/>} />
                </Routes>
            </Content>
        </div> : <Login/> }
        </React.Fragment>
    )
}
const mapStateToProps = (state) =>({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})

export default connect(mapStateToProps,{signOut})(MainLayout)