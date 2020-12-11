import React from 'react'

function SuggestedButton({ title }) {
    return (
        <div className = "suggested-button">
            <button className = "suggested___button">{title}</button>
        </div>
    )
}

export default SuggestedButton
