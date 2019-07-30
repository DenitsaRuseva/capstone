import React from 'react';
import Input from '../../../UI/Input/Input';
import WithoutRootDiv from '../../../../hoc/WithoutRootDiv/WithoutRootDiv';

const numberOfItemsPerPage = (props) => {
    const options = {
        options: [
            {
                name: '24',
                value: "24",
                selected: props.selectValue == '24'
             },
            {
                name: '36',
                value: "36",
                selected: props.selectValue == '36'
            },
            {
            name: 'all',
            value: 'all',
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
        />
        </WithoutRootDiv>
    )
};

export default numberOfItemsPerPage;