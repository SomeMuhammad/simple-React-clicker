import React from 'react';

const Upgrade = ({...props}) => {
    return (
    <div className="Upgrades">
        <button className='UPbutton' onClick={props.func}>upgarade {props.upgrader} cost:{props.forma(props.cost)}</button>
    </div>
    )
}


export default Upgrade;
