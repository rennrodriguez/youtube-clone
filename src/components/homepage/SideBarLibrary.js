import React from 'react'


function SideBarHome({ IconB, title }) {
    return (
        <div className = "sidebar-home">
            <IconB className = "home___iconb" />
            <h2>{title}</h2>
        </div>
    )
}

export default SideBarHome
