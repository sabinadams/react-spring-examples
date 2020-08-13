import React from 'react'
import '../../App.css'
import { useTrail, animated } from 'react-spring'

function RoundingSquares() {
    const squares = [{
        color: '#66b6e4'
    },{
        color: '#d6c972'
    },{
        color: 'red'
    }]

    const trail = useTrail( squares.length, {
        borderRadius: 50,
        opacity: 1,
        from: { borderRadius: 0, opacity: 0 },
        config: { duration: 800 }
    })

    return (
        <div style={{display: 'flex'}}>
            {
                trail.map( (props, i) => (
                    <animated.div key={i} style={{
                        ...props,
                        backgroundColor: squares[i].color,
                        height: 50, 
                        width: 50, 
                        margin: 10, 
                    }}>
                    </animated.div>
                ))
            }
        </div>
    )
}

export default RoundingSquares
