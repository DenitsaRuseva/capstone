import React from 'react';
import './EllipsisText.css';

const ellipsisText = (props) => (
    <span className='ellipsisText'>{props.children}</span>
);

export default ellipsisText;