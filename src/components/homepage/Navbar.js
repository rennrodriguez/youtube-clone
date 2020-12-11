import React from 'react'
import '../css/homepage/Navbar.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from './avatar.png';
import YoutubeIcon from './youtube-logo.png';
import { useHistory } from 'react-router-dom'


function Navbar() {

   
    const history = useHistory()

    const handleOnClick = () =>{
        history.push('/home')
    }

    return (
        <div className = "navbar-container">
            <div className = "left-container">
                <MenuIcon />
                <img className = "youtube___logo" src = {YoutubeIcon} alt = "yasdasd" onClick = {handleOnClick} />
            </div>

            <div className = "center-container">
                <input type = "text" placeholder = "Search"/>
                <div className = "button-container">
                    <SearchIcon className = "search___button" />
                </div>    
            </div>

            <div className = "right-container">
                <VideoIcon className = "right___icon" />
                <AppsIcon className = "right___icon" />
                <NotificationIcon className = "right___icon" />
                <img className = "avatar___icon" src = {Avatar} alt = "account" />
            </div>
        </div>
    )
}

export default Navbar
