import React from 'react';
import { connect } from 'react-redux';
import './OrderSummary.css';

const orderSummary = (props) => {
    console.log("in render orderSummary");
    const products = props.productsInCartIds.map((productId, i) => {
        return <li key={i}>{props.allProducts[productId].name}: {props.productsQuantities[i]} pcs.</li>
    });
    const productsList = (
        <ul className='order-summary-products-list'>{products}</ul>
    )
    return (
        <div className='order-summary'>
            <h3 className='order-header'>Your order was received</h3>
            <h4>Products:</h4>
            {productsList}
            <h4>Total cost:</h4>
            <p>{(props.totalPrice*1.01+10).toFixed(2)}$</p>
            <h4>Shipping details:</h4>
            <p>Address: {props.street}, {props.city}</p>
            <p>Name: {props.firstName} {props.lastName}</p>
            <p>Phone Number: {props.phoneNumber}</p>
        </div>
);
};

const mapStateToProps = state => {
    return {
        allProducts: state.allProducts
    };
};

export default connect(mapStateToProps)(orderSummary);