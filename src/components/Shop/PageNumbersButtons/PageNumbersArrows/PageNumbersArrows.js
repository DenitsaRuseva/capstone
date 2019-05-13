import React from 'react';
import Button from '../../../UI/Button/Button';

const pageNumbersArrows = (props) => {
    return (
        props.disabled ? null :
        <Button type="button" clicked={props.clicked}>{props.children}</Button>
    ); 
};

export default pageNumbersArrows;