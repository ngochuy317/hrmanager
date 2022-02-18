import React from 'react'

function Content({ children }) {
    return (
        <div className="flex">
            <div className="w-[240px] flex-none"></div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default Content