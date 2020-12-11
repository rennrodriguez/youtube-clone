import React from 'react'
import '../css/watch/VideoDescription.css'
import LikeIcon from '@material-ui/icons/ThumbUp'
import DislikeIcon from '@material-ui/icons/ThumbDownAlt'
import ReplyIcon from '@material-ui/icons/Reply'
import PlaylistIcon from '@material-ui/icons/PlaylistAdd'
import MoreIcon from '@material-ui/icons/MoreHoriz'

function TitleDescription() {
    return (
        <div className = "title-description">
            <h1 className = "video___titletwo">Jawhead Support Teknik, Rafflesia</h1>
            <div className="views-date">
                <p className = "viewstwo">8,683 views • Nov 10, 2020</p>
                <div className="like-dislike">
                    
                    <LikeIcon className = "title-icons"/>
                    <p className = "title-option">56K</p>
                    <DislikeIcon className = "title-icons" fontSize = "inherit" />
                    <p className = "title-option">1.8K</p>
              
                    <ReplyIcon className = "title-icons__reply" fontSize = "inherit"/>
                    <p className = "title-option">SHARE</p>
                    <PlaylistIcon className = "title-icons" fontSize = "inherit" />
                    <p className = "title-option">SAVE</p>
                    <MoreIcon className = "title-icons" fontSize = "inherit"/>
                </div>
            </div>
        </div>
    )
}

export default TitleDescription
