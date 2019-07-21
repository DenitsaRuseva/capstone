import React from 'react';

const pageNumberButton = (props) => 
<button type="button"
    class='btn-page-number'
    onClick={() => props.clicked(props.children)}
    disabled={props.disabled}>{props.children}</button>

export default pageNumberButton;