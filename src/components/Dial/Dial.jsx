import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid blue',margin:'10px',padding:'10px'}}>
            <h4>This is Dial component</h4>
            <h5>My Steps count: {props.steps}</h5>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;