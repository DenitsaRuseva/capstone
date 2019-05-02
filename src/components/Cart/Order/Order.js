import React from 'react';
import Product from './Product/Product';
import './Order.css';

const order = (props) => {
    const shipping = props.totalPrice ? 10 : 0; //will show 0 if quantity is changed to 0
    // let totalPrice = 0;
    const products = props.products.map((product, i) => {
            console.log(product);
            return (
            <Product 
            key={i} 
            product={product} 
            quantity={props.productsQuantities[i]} 
            removeProduct={() => props.removeProduct(i)}
            changeQuantity={(event) => props.changeQuantity(event, i)}
            quantityReduce={props.quantityReduce[i]}/>
            )
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
            {/*rubric49*/}
            <div className="cost">
                <div>Subtotal: <span>{(props.totalPrice*1).toFixed(2)}$</span></div>
                <div>Tax cost: <span>{(props.totalPrice*0.01).toFixed(2)}$</span></div>
                <div>Shipping: <span>{(shipping*1).toFixed(2)}$</span></div>
                <div className='total'>Total: <span>{(props.totalPrice*1.01 + shipping*1).toFixed(2)}$</span></div>
            </div>
        </div>
    )
};

export default order;