import React from 'react'
import { useHistory } from 'react-router-dom'

function VideoCard( {title, channel, views, time, thumbnail, avatar} ) {

    const history = useHistory()

    const handleOnclick = () =>{
        history.push('/watch')
    }

    return (
        <div className = "video-card" onClick = {handleOnclick}>
            <img className = "video___thumbnail" src={thumbnail} alt={title}/>
            <div className="video-details">
                <img className = "video___avatar" src={avatar} alt={channel}/>
                <div className="details">
                    <p className = "video___title">{title}</p>
                    <p className = "video___channel">{channel}</p>
                    <p className = "video___channel">{views} • {time}</p>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCard
