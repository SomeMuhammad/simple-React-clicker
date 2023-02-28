import React from 'react';
const Clicker = ({...props}) => {
    return (
        <div >
            <h1>CLICKS: {props.forma(props.count)}</h1>
           <div className='container'>
            <button id='click' className = "button" onClick={props.func}>press</button>
          </div>
        </div>

    );
}

export default Clicker;
