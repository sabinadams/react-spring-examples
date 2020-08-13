import React, { useState } from 'react'
import '../../App.css'
import { useTransition, animated } from 'react-spring'

function SquareToCircleList() {

    const [ elements, setElements ] = useState([{
        id: 1,
        color: '#66b6e4'
    },{
        id: 2,
        color: '#d6c972'
    },{
        id: 3,
        color: 'red'
    }])


    const transitions = useTransition( elements, element => element.id, {
      from: { borderRadius: 0, opacity: 0 },
      enter: { borderRadius: 50, opacity: 1 },
      leave: { borderRadius: 0, opacity: 0 },
      trail: 300,
      config: { duration: 800 }
    }) 

    const addElement = () => setElements([...elements, { id: Math.ceil(Math.random() * 100), color: 'pink'}])
    const removeElement = key => setElements( elements.filter( el => el.id != key))
    
    return (
        <>
          <div style={{display: 'flex'}}>
              {
                transitions.map(({ item, props, key}) => (
                  <animated.div key={key}
                    style={{
                      ...props,
                      backgroundColor: item.color,
                      height: 50, 
                      width: 50, 
                      margin: 10, 
                    }} onClick={() => removeElement(item.id)}></animated.div>
                ))
              }
              <div 
                style={{
                  backgroundColor: '#ffffff33',
                  borderRadius: 50,
                  height: 50, 
                  width: 50, 
                  margin: 10, 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }} 
                onClick={() => addElement()}
              >
                <svg opacity="0.6" height="20pt" viewBox="0 0 448 448" width="20pt" xmlns="http://www.w3.org/2000/svg"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
              </div>
          </div>
        </>
    )
}

export default SquareToCircleList
