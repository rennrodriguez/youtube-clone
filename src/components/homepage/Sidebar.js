import React from 'react'
import '../css/homepage/Sidebar.css'
import SidebarHome from "./SideBarHome"
import SideBarLibrary from "./SideBarLibrary"
import HomeIcon from "@material-ui/icons/Home"
import TrendingIcon from "@material-ui/icons/Whatshot"
import SubsIcon from "@material-ui/icons/Subscriptions"
import LibraryIcon from "@material-ui/icons/VideoLibrary"
import HistoryIcon from "@material-ui/icons/History"
import YourVideosIcon from "@material-ui/icons/OndemandVideo"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import LikeVideosIcon from "@material-ui/icons/ThumbUpAlt"
import PlaylistIcon from "@material-ui/icons/PlaylistPlay"



function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "home-menu">
                <SidebarHome Icon = {HomeIcon} title = "Home" />
                <SidebarHome Icon = {TrendingIcon} title = "Trending" />
                <SidebarHome Icon = {SubsIcon} title = "Subscriptions" />
            </div>
            <div className="library-menu">
                <SideBarLibrary IconB = {LibraryIcon} title = "Library" />
                <SideBarLibrary IconB = {HistoryIcon} title = "History" />
                <SideBarLibrary IconB = {YourVideosIcon} title = "Your Videos" />
                <SideBarLibrary IconB = {WatchLaterIcon} title = "Watch Later" />
                <SideBarLibrary IconB = {LikeVideosIcon} title = "Like videos" />
                <SideBarLibrary IconB = {PlaylistIcon} title = "RENN RYAN" />
            </div>
        </div>
    )
}

export default Sidebar
