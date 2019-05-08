import React from 'react';
import './Badge.css';

const badge = (props) => (
    <span className='badge'>{props.count < 21 ? props.count : '20+'}</span>
);

export default badge;