import React from 'react';

const Smurfs = (props) => {
    return(
        <div>
            <p>{props.smurf.name}</p>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    );
}

export default Smurfs;