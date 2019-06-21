import React from 'react';

const Smurfs = (props) => {
    return(
        <div className = 'smurf-container'>
           <p>
            Name: {props.smurf.name} <br></br>
            Age: {props.smurf.age}   <br></br>
            Height: {props.smurf.height} <br></br>
           </p>
           <button onClick = {e => props.deleteSmurf(e, props.smurf.id)}>Delete Smurf :(</button>
            
        </div>
    );
}

export default Smurfs;