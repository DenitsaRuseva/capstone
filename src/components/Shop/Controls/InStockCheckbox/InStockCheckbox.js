import React, {PureComponent} from 'react';
import Input from '../../../UI/Input/Input';

class InStockCheckbox extends PureComponent {
    render(){
    console.log('in instock');
    return <Input elementType='checkbox' label="In stock only&nbsp;" changed={this.props.onInStockClick} checked={this.props.showInStockOnly}/>
    }
};

export default InStockCheckbox;