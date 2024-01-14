import React, { useState } from 'react';
import Counter from './Counter';
import ControlPanel from './ControlPanel';

const LiftingState = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };


//vi lifter state og passer det til Counter og ControlPanel som props

  return (
    <div>
      <Counter value={counter} />
      <ControlPanel onIncrement={incrementCounter} />
    </div>
  );
};
export default LiftingState;
