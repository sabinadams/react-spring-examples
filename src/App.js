import React from 'react';
import './App.css';
import FadingText from './examples/useSpring/fadingText'
import MorphingDivs from './examples/useSprings/morphingDivs'
import RoundingSquares from './examples/useTrail/roundingSquares'
import SquareToCircleList from './examples/useTransition/squareToCircleList'
import AddFlairList from './examples/useChain/addFlairList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FadingText/> */}
        {/* <MorphingDivs/> */}
        {/* <RoundingSquares/> */}
        {/* <SquareToCircleList/> */}
        <AddFlairList/>
      </header>
    </div>
  )
}

export default App;
