import React from 'react'
import TitleDescription from './TitleDescription'
import ChannelDescription from './ChannelDescription'
import Comments from './Comments'
import CommentsMain from './CommentsMain'

function VideoDescription() {
    return (
        <div className = "video-description">
            <TitleDescription />
            <ChannelDescription />
            <Comments />
            <CommentsMain />
        </div>
    )
}

export default VideoDescription
