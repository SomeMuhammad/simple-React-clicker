import React from 'react';

const AutoUpgrade = ({...props}) => {
    return (
        <div className="AutoUpgrades">
        <button className='AutoUPbutton' onClick={props.func}>upgarade {props.upgrader} cost:{props.forma(props.cost)}</button>
    </div>
    );
}

export default AutoUpgrade;
