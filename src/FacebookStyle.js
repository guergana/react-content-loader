import React from 'react';

const FacebookStyle = (props ) => {
    const gradient = {
        fill: `url(#${props.classNameHash}1)`
    }
    return(
        <svg viewBox = "0 0 400 130" version = "1.1" style={props.style} preserveAspectRatio="xMidYMid meet">
            <rect style={gradient} clipPath={`url(#${props.classNameHash}2`} x="0" y="0" width="400" height="400" />

            <defs>
                <clipPath id={`${props.classNameHash}2`}>
                    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                    
                    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />

                    <rect x="0" y="80" rx="3" ry="3" width="350" height="10" />
                    <rect x="0" y="100" rx="3" ry="3" width="400" height="10" />
                    <rect x="0" y="120" rx="3" ry="3" width="360" height="10" />
                </clipPath>

                <linearGradient id={`${props.classNameHash}1`}>
                    <stop offset="0%" stopColor={props.primaryColor}>
                        <animate attributeName="offset" values="-2; 1" dur={`${props.speed}s`} repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor={props.secondaryColor}>
                        <animate attributeName="offset" values="-1.5; 1.5" dur={`${props.speed}s`} repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor={props.primaryColor}>
                        <animate attributeName="offset" values="-1; 2" dur={`${props.speed}s`} repeatCount="indefinite" />
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default FacebookStyle
