import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:'2px solid salmon',padding:'5px'}}>
            <h2>This is Knob Component</h2>
            <p>Steps here is: {props.steps}</p>

        </div>
    );
};

export default Knob;