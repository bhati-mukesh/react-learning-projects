import React from 'react';

function ShadesInput(props) {
    return (
        <div className="shade-search">
            <div className="emojis"></div>
            <input type="search" className="shade-input" value={props.color} 
            onChange={e=>props.onInputChange(e.target.value)} />
            <div className="emojis"></div>
        </div>
    );
}

export default ShadesInput;