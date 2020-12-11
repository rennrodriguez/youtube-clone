import React from 'react'


function SideBarHome({ Icon, title }) {
    return (
        <div className = "sidebar-home">
            <Icon className = "home___icon" />
            <h2>{title}</h2>
        </div>
    )
}

export default SideBarHome
