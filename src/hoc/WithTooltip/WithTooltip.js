import React from 'react';
import './WithTooltip.css';

const withTooltip = (props) => (
    <div className='tooltip-container'>
        <div className='tooltip'>
        {props.children}        
        </div>
        {props.showTooltip ? (
            <div className={['tooltip-text', props.position].join(' ')}>
                {props.message}
            </div>
        ) : null}
    </div>
);

export default withTooltip;

