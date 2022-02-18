import React from 'react'
import Content from './Content'
import Employee from '../../container/Employee'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Routes, Route } from "react-router-dom";

function MainLayout() {
    return (
        <div className="relative">
            <Navbar />
            <Sidebar />
            <Content>
                <Routes>
                    <Route exact path="/" element={<p>Home</p>} />
                    <Route exact path="/employee" element={<Employee />} />
                </Routes>
            </Content>
        </div>)
}

export default MainLayout