import React from 'react'
import '../css/watch/TheVideo.css'
import VideoDescription from './VideoDescription'

function TheVideo() {
    return (
        <div className = "the-video">
            <div className="youtube-video">
                <iframe className = "youtube___video" title = "youtube-video" width="400" height="200" src="https://www.youtube.com/embed/9mGTmTULjmE?autoplay=1&mute=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="title">
                <VideoDescription />
            </div>
        </div>
    )
}

export default TheVideo
