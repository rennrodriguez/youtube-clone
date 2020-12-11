import React from 'react'
import Navbar from '../homepage/Navbar'
import '../css/watch/WatchVideo.css'
import TheVideo from './TheVideo'
import SuggestedSideBar from './SuggestedSideBar'
import VideoDescription from './VideoDescription'

function WatchVideo() {
    return (
        <div className = "watch-video">
            <Navbar />
            <div className="video-suggested">
                <div className="video-container">
                    <TheVideo />
                </div>
                <SuggestedSideBar />
            </div>
        </div>
    )
}

export default WatchVideo
