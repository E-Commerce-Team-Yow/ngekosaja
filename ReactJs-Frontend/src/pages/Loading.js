import React from 'react'
import Source from './Source'

const Loading = () => {
    return (
        <div>
            <div className="preloader">
            <div className="preloader-inner">
                <div className="preloader-icon">
                <img src={Source.logo} alt="#"/>
                <span />
                <span />
                </div>
            </div>
            </div>

        </div>
    )
}

export default Loading
