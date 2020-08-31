import React from 'react'
import './style/WIdget.css'

function Widget() {
    return (
        <div className="widget">
            <iframe 
            src="https://www.instagram.com/momoahie/embed" 
            width="340" 
            height="100%s" 
            frameborder="0" 
            scrolling="no" 
            allowtransparency="true"
            allow="encrypted-media"></iframe>
        </div>
    )
}

export default Widget
