import React from 'react'
import '../../App.css'
import { useSpring, animated } from 'react-spring'

/* Uses the same spring for every item. useSprings would be a good way to set up individual springs for each item */
function FadingText() {
    // Option 1: Using set function and alias for to: {} (mention cancel)
    // const [props, set, cancel] = useSpring(() => ({
    //     from: { opacity: 0 },
    //     config: { duration: 1000 }
    // }))
    // set({opacity: 1})
    // return <animated.h2 style={props}>I fade in slowly</animated.h2>

    // Option 2: Using to: alias
    const props = useSpring({ 
        opacity: 1,
        from: { opacity: 0 }, 
        config: { duration: 1000 },
    })
    return <animated.h2 style={props}>I fade in slowly</animated.h2>
}

export default FadingText
