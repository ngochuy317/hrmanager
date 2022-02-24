import React from 'react'
import { Link } from 'react-router-dom'
import { UilEstate, UilUsersAlt, UilBagAlt, UilCalender, UilEnvelopeCheck, UilChartGrowth, UilSetting, UilLayerGroup } from '@iconscout/react-unicons'

const menu = [{
    name: 'Tổng quan', href: '#', children: [
        { name: 'Trang chủ', path: '/', icon: <UilEstate />, current: true },
        { name: 'Nhân viên', path: '/employee', icon: <UilUsersAlt />, current: false },
        { name: 'Phòng ban', path: '/department', icon: <UilBagAlt />, current: false },
        { name: 'Chấm công', path: '/timesheet', icon: <UilCalender />, current: false },
    ]
},
{
    name: 'Tuỳ chọn', href: '#', children: [
        { name: 'Đơn xin nghỉ', path: '/approval', icon: <UilEnvelopeCheck />, current: false },
        { name: 'Lương', path: '/salary', icon: < UilLayerGroup />, current: false },
        { name: 'Thống kê', path: '/statistic', icon: < UilChartGrowth />, current: false },
    ]
},
{
    name: 'Cấu hình', href: '#', children: [
        { name: 'Tài khoản', path: '/account', icon: <UilSetting />, current: true },
    ]
},
]

function Sidebar({user}) {
    return (
        <div className="w-[240px] h-screen bg-slate-800 text-white fixed shadow overflow-y-auto">
            <div className="flex items-center p-3 ">
                <img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-1/p160x160/122026078_1682898235212951_447120331317906618_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=QfAesCkqrzsAX8vUzAi&_nc_ht=scontent.fhan2-1.fna&oh=00_AT8rszb1tCIexybKPFW1IrpAZJIULt30Serga7RaQuhCdQ&oe=6230BFFA"
                    className="w-12 h-12 rounded-full object-cover object-center border-2"
                    alt="avt" />
                <div className="mx-3">
                    <div className="font-medium">{user? user.name : ""}</div>
                    <div>
                        <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        <span className="text-sm mx-1">Online</span>
                    </div>
                </div>
            </div>
            <div>
                {menu.map((items, index) => {
                    return <div key={index}>
                        <div className="bg-slate-700 px-2 py-1 uppercase text-sm font-medium text-gray-200"> {items.name}</div>
                        <ul className="list-none">
                            {items.children.map((item, index) => {
                                return <Link to={item.path} key={index}>
                                    <li className="my-1 py-2 px-3 hover:bg-slate-500 cursor-pointer flex" >
                                        <span className="mx-2">{item.icon}</span>
                                        <span className="font-medium">{item.name}</span>
                                    </li>
                                </Link>
                            })}
                        </ul>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Sidebar