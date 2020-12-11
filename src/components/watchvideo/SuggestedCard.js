import React from 'react'


function SuggestedCard({ thumbnail, title, channel, views, time }) {

    const refreshClick = () => {
        window.location.reload(false)
    }


    return (
        <div className = "suggested-card" onClick = {refreshClick}>
            <img className = "video____thumbnail" src={thumbnail} alt={title}/>
            <div className="suggested-title">
                <p className = "suggested-name">{title}</p>
                <p className = "suggested-channel">{channel}</p>
                <p className = "suggested-views">{views} • {time}</p>
            </div>
            
        </div>
    )
}

export default SuggestedCard
