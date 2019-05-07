import React from 'react';
import './Badge.css';

const badge = (props) => (
    <span className='badge'>{props.count}</span>
);

export default badge;