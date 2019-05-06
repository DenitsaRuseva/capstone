import React from 'react';
import './Tooltip.css';

const tooltip = (props) => (
    <div className='tooltip-container'>
        <div className="tooltip">
            <span className="tooltiptext">{props.children}</span>
        </div>
    </div>
   
); 

export default tooltip;