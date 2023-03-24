import React from 'react';
import DeviceDetails from '../Device-Details/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h2>This is my Device:{props.name}</h2>
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;