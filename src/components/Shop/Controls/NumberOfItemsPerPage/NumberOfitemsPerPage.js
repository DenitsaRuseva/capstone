import React from 'react';
import Input from '../../../UI/Input/Input';
import WithoutRootDiv from '../../../../hoc/WithoutRootDiv/WithoutRootDiv';

const numberOfItemsPerPage = (props) => {
    const options = {
        options: [
            {
                name: '24',
                value: "24",
                disabled: false,
                selected: props.selectValue == '24'
             },
            {
                name: '36',
                value: "36",
                disabled:  props.numberOnShownProducts*props.possiblePages <= 36,
                selected: props.selectValue == '36'
            },
            {
            name: 'all',
            value: 'all',
            disabled: props.numberOnShownProducts*props.possiblePages <= props.productsToShow,
            selected: props.selectValue == 'all'
            }]
    };
    return (
        <WithoutRootDiv>
        {/* <span>Items per page:</span> */}
        <Input 
        label="Items per page &nbsp;"
        elementType='select'
        elementConfig={options}
        changed={props.changed}
        disabled={props.numberOnShownProducts*props.possiblePages <= 24}
        />
        </WithoutRootDiv>
    )
};

export default numberOfItemsPerPage;