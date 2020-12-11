import React from 'react'
import '../css/watch/SampleComments.css'
import LikeIcon from '@material-ui/icons/ThumbUp'
import DislikeIcon from '@material-ui/icons/ThumbDownAlt'


function SampleComments( { image, channelName, date, comment} ) {

  

    return (
        <div className = "sample-comments">
            <img className = "channel-image" src= {image} alt={channelName}/>
            <div className="comments-samples">
                <p className = "channel-comment">{channelName} <span>{date}</span></p>  
                <p className = "the-comment">{comment}</p>
                <div className="likeanddislike">
                    <LikeIcon />
                    <p>2.9K</p>
                    <DislikeIcon />
                    <p className = "reply-text">REPLY</p>
                </div>
            </div>
        </div>
    )
}

export default SampleComments
