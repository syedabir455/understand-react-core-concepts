import React from 'react';

const DeviceDetails = (props) => {
    return (
        <div>
            <h5>Info About your Phone</h5>
            <p>Price:{props.price}</p>
        </div>
    );
};

export default DeviceDetails;