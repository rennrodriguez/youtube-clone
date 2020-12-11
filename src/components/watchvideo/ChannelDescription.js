import React from 'react'
import '../css/watch/ChannelDescription.css'

function ChannelDescription() {
    return (
        <div className = "channel-description">
            <img className = "channel-image" src="https://yt3.ggpht.com/ytc/AAUvwngoe8O7ldajG4gUVwfwe0XNUHuV-3-m_zGCg1wiJQ=s88-c-k-c0x00ffffff-no-rj" alt="akosidogie"/>
            <div className="channel-info">
                <p className = "channel-name">AKOSI DOGIE</p>
                <p className = "channel-subscribers">5.3M subscribers</p>
                <p className = "channel-information">For all business inquires and media interests please directly contact: naser.ignaciomollazehi@gmail.com.</p>
            </div>
            <button className = "subscribe-button">SUBSCRIBE</button>
        </div>
    )
}

export default ChannelDescription
