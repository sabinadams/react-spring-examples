import React from 'react'
import '../../App.css'
import { useSprings, animated } from 'react-spring'

function MorphingDivs() {
    const divs = [{
        color: '#66b6e4',
        circle: true
    },{
        color: '#d6c972',
        circle: false
    }]

    const springs = useSprings( divs.length, divs.map( div => ({
        backgroundColor: div.color,
        opacity: 1,
        borderRadius: div.circle ? 0 : 50,
        from: { color: 'rgba(0,0,0,0)', opacity: 0, borderRadius: div.circle ? 50 : 0 },
        config: { duration: 1500 }
    })))

    return (
        <div style={{display: 'flex'}}>
            {
                springs.map( ({ backgroundColor, opacity, borderRadius }, i) => (
                    <animated.div key={i} style={{
                        backgroundColor, 
                        opacity, 
                        height: 50, 
                        width: 50, 
                        margin: 10, 
                        borderRadius: borderRadius.interpolate( rad => `${rad}%`)
                    }}>
                    </animated.div>
                ))
            }
        </div>
    )
}

export default MorphingDivs
