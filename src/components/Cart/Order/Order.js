import React from 'react';
import Product from './Product/Product';
import Button from '../../UI/Button/Button';
import './Order.css';

const order = (props) => {
    const shipping = props.totalPrice ? 10*1 : 0*1;
    const taxCost = props.totalPrice ? props.totalPrice*0.01 : 0;
    const products = props.productsInCartIds.map((id, i) => {
            return (
            <Product 
                key={i} 
                productId={id} 
                quantity={props.productsQuantities[i]} 
                removeProduct={() => props.removeProduct(id, i)}
                changeQuantity={(event) => props.changeQuantity(event.target.value, id, i)}
                quantityReduce={props.quantityReduce[i]}/>
            );
    });
    return(
        <div className='table'>
            <div className='t-head'>
                <div className='t-row'>
                    <div className="th-product">Product</div>
                    <div className="th">Price</div> 
                    <div className="th">Quantity</div>
                    <div className="th">Total Cost</div>
                    <div className="th">Remove</div>
                </div>
            </div>
            {products}
            <div className="cost">
                <div>Subtotal: <span>{props.totalPrice.toFixed(2)}$</span></div>
                <div>Tax cost: <span>{taxCost.toFixed(2)}$</span></div>
                <div>Shipping: <span>{shipping.toFixed(2)}$</span></div>
                <div className='total'>Total: <span>{(props.totalPrice + shipping + taxCost).toFixed(2)}$</span></div>
            </div>
            <div className='border-row'><div className='border'></div></div>
            <div className="order-controls">
                <Button clicked={props.showPreviousPage} class="add-button">Back</Button>
                <Button clicked={props.showOrderPage} class="add-button">Counitue</Button>
            </div>
        </div>
    )
};

export default order;