import React from 'react';
type displayType={
    value:number|string
}
function Display(props:displayType){
    return(
        <div>
            {props.value}
        </div>
    )
}

export default Display