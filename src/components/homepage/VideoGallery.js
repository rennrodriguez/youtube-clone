import React from 'react'
import Suggested from './Suggested'
import VideoAds from './VideoAds'
import VideoThumbnails from './VideoThumbnails'
import '../css/homepage/VideoGallery.css'

function VideoGallery() {


    return (
        <div className = "video-gallery" >
            
            <Suggested />
            <VideoAds />
            <VideoThumbnails />
        </div>
    )
}

export default VideoGallery
