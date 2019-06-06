import React, {Component} from 'react';
import Input from '../../../UI/Input/Input';

class Sort extends Component {

    state = {
        elementConfig: {
        options: [
            {
                value: 'none_none',
                name: 'none'
            },
            {
                value: 'name_ascending',
                name: 'name (A-Z)'
            }, {
                value: 'name_descending',
                name: 'name (Z-A)'
            }, {
                value: 'price_ascending',
                name: 'price (lowest first)'
            }, {
                value: 'price_descending',
                name: 'price (highest first)'
            }, {
                value: 'rating_ascending',
                name: 'rating (lowest first)'
            }, {
                value: 'rating_descending',
                name: 'rating (highest first)'
            }
        ],
        defaultValue: 'none'
    }
    };

    render(){
        return <Input 
        elementType="select"
        label='Sort by: &nbsp;'
        elementConfig={this.state.elementConfig}
        changed={(value) => this.props.onSort(value)}/>
    }

    // render(){
    //     const options = this.state.options.map((o, i) => {
    //        return <option key={i} value={o.value} selected={o.selected}>{o.innerHtml}</option>
    //     });
    //     console.log('in sort');
    //     return(
    //         <label className='sort-label'>
    //             <div className='content-wrapper'>
    //                 <span>Sort by:&nbsp;</span>
    //                 <select 
    //                     onChange={(event) => this.props.onSort(event)} value={this.props.selectValue}>
    //                     {options}
    //                 </select>  
    //             </div>                    
    //         </label>
    //     );
    // };
};

export default Sort;