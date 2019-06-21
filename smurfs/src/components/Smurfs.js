import React from 'react';

const Smurfs = (props) => {
    return(
        <div>
           <p>
            {props.smurf.name} <br></br>
            {props.smurf.age}   <br></br>
            {props.smurf.height} <br></br>
           </p>
           <button onClick = {e => props.deleteSmurf(e, props.smurf.id)}>Delete Smurf :(</button>
            
        </div>
    );
}

export default Smurfs;