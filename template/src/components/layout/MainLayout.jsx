import React from 'react'
import Content from './Content'
import Employee from '../../container/Employee'
import EmployeeForm from '../../pages/employee/EmployeeForm'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Routes, Route } from "react-router-dom";
import Alerts from './Alerts'

function MainLayout() {
    return (
        <div className="relative">
            <Alerts/>
            <Navbar />
            <Sidebar />
            <Content>
                <Routes>
                    <Route exact path="/" element={<p>Home</p>} />
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/employee/create" element={<EmployeeForm />} />
                </Routes>
            </Content>
        </div>)
}

export default MainLayout