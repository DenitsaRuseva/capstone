import React from 'react';
import Button from '../../../UI/Button/Button';

const pageNumberButton = (props) => 
<Button type="button"
    class='btn-page-number'
    clicked={() => props.clicked(props.children)}
    disabled={props.disabled}>{props.children}</Button>

export default pageNumberButton;