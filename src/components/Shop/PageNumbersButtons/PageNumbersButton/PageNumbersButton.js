import React from 'react';

const pageNumberButton = (props) => 
<button type="button" 
    onClick={() => props.clicked(props.children)}
    disabled={props.disabled}>{props.children}</button>

export default pageNumberButton;