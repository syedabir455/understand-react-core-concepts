import React, { useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const IncreaseSteps=()=>{
      const nextSteps=steps+1;
      setSteps(nextSteps)
    }
    return (
        <div style={{backgroundColor:'lightblue',margin:'15px',border:'2px solid green',padding:'10px'}}>
            <h3>This is my smart watch.</h3>
            <p>Steps:{steps}</p>
            <button onClick={IncreaseSteps}>Start</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;