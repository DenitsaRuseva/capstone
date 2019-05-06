import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WithoutRootDiv from '../../../../hoc/WithoutRootDiv/WithoutRootDiv';
import { connect } from 'react-redux';

const product = (props) => (
        <WithoutRootDiv>
            <div className='t-row'>

                
                {props.quantityReduce ? 
                <div className='quantity-reduce'>Your product quantity is reduce to { props.allProducts[props.productId].stock} pieces</div>
                 : null} {/*show message if product quantity is reduced to product stock */} 
                
                <div className="hidden">Product</div>
                <div className='td-image'>
                    <img src={props.allProducts[props.productId].imagelink} alt={props.allProducts[props.productId].name} height='100px'/>
                </div>
                <div className='td-name'>
                    {props.allProducts[props.productId].name}
                </div>
                <div className="hidden">
                    Price
                </div> 
                <div className='td-price'>
                    {props.allProducts[props.productId].price.toFixed(2)}$
                </div>
                <div className="hidden">
                    Quantity
                </div>
                <div className='td-quantity'>
                    <input 
                        type="number" 
                        name="quantity" 
                        min="1" 
                        max={props.allProducts[props.productId].stock} 
                        value={props.quantity} 
                        onChange={(event) => props.changeQuantity(event)}/>
                </div>
                <div className="hidden">
                    Total Cost
                </div>
                <div className='td-total-price-product'>
                    {(props.quantity * props.allProducts[props.productId].price).toFixed(2)}$
                </div>
                <div className="hidden">
                    Remove
                </div>
                <div className='remove-btn'>
                    <FontAwesomeIcon icon='minus-circle' className='remove-icon' onClick={props.removeProduct}/>
                </div>
            </div>
            <div className='border-row'><div className='border'></div></div>
        </WithoutRootDiv>
);

const mapStateToProps = state => {
    return {
        allProducts: state.allProducts
    };
};

export default connect(mapStateToProps)(product);