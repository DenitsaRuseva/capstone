import React, {Component} from 'react';
import Order from '../../components/Cart/Order/Order';
import Form from '../../components/UI/Form/Form';
import WithoutRootDiv from '../../hoc/WithoutRootDiv/WithoutRootDiv';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Cart/OrderSummary/OrderSummary';
import './Cart.css';
import { updateFormOnInput } from '../utility';
import {Route} from 'react-router-dom'; 

class Cart extends Component {

    state = {
        orderForm: {
            firstName: {
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name',
                    pattern: '^[A-Za-z]{1,50}$',  /*rubric52*/
                    required: true, /*rubric52*/
                    tabIndex:"-1"
                },
                value: '',
                validation: {
                    required: true,
                    isLettersOnly: true,
                    maxLength: 50
                },
                label: "FIRST NAME *",
                valid: false,
                touched: false
            },
            lastName: {
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name',
                    pattern: '^[A-Za-z]{1,50}$', /*rubric52*/
                    required: true, /*rubric52*/
                    tabIndex:"-1"
                },
                value: '',
                validation: {
                    required: true,
                    isLettersOnly: true,
                    maxLength: 50
                },
                label: 'LAST NAME *',
                valid: false,
                touched: false
            },
            street: {
                elementConfig: {
                    type: 'text',
                    pattern: '^.{1,50}$',
                    placeholder: 'Street',
                    required: true, /*rubric52*/
                    tabIndex:"-1"
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 50
                },
                label: "STREET *",
                valid: false,
                touched: false
            },
            city: {
                elementConfig: {
                    type: 'text',
                    pattern: '^.{1,50}$',
                    placeholder: 'City',
                    required: true, /*rubric52*/
                    tabIndex:"-1"
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 50,
                },
                label: 'CITY *',
                valid: false,
                touched: false
            },
            phoneNumber: {
                elementConfig: {
                    type: 'tel',
                    placeholder: '123-456-7890',
                    pattern: '^[0-9]{3}-[0-9]{3}-[0-9]{4}$', /*rubric52*/
                    required: true,  /*rubric52*/
                    tabIndex:"-1"
                },
                value: '',
                validation: {
                    required: true,
                    isPhone: true
                },
                label: 'PHONE NUMBER *',
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    };

    componentWillUpdate(){
        console.log('in component will update cart');
    };

    componentWillUnmount(){
        console.log('in component will unmount cart');
        this.props.clearZeroQuantities();
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormData = updateFormOnInput(event, inputIdentifier, this.state.orderForm);
        this.setState({orderForm: updatedFormData[0], formIsValid: updatedFormData[1]});
    };

    showPrewiousPageHandler = () => {
        this.props.history.goBack();
    };

    showOrderPageHandler = () => {
        this.props.history.push('/order');
    };

    render(){
        const orderForm = (
            <div className="cart">
                    <Order
                        productsInCartIds={this.props.productsInCartIds} 
                        productsQuantities={this.props.productsQuantities}
                        removeProduct={this.props.removeProduct}
                        changeQuantity={this.props.changeQuantity}
                        totalPrice={this.props.totalPrice}
                        quantityReduce={this.props.quantityReduce}
                        showPreviousPage={this.showPrewiousPageHandler}
                        showOrderPage={this.showOrderPageHandler}/>
            </div>
        );

        const orderDetails = (
            <div className="cart">
                    <Modal show={this.props.orderMade} modalClosed={this.props.cleanState}>
                        <OrderSummary 
                        productsInCartIds={this.props.productsInCartIds} 
                        productsQuantities={this.props.productsQuantities}
                        totalPrice={this.props.totalPrice}
                        firstName={this.state.orderForm.firstName.value}
                        lastName={this.state.orderForm.lastName.value}
                        street={this.state.orderForm.street.value}
                        city={this.state.orderForm.city.value}
                        phoneNumber={this.state.orderForm.phoneNumber.value}/>
                    </Modal>
                <Form
                form={this.state.orderForm}
                inputChanged={this.inputChangedHandler}
                onSubmited={() => this.props.makeOrder(this.state.formIsValid)}
                formHeader="ENTER YOUR SHIPPING DETAILS"
                btnClass='order-button'
                btnText="CHECKOUT"
                disableOrderBtn={this.props.totalPrice === 0}/>
            </div>
        );
        
        return (
            <WithoutRootDiv>
                <Route path='/cart' exact render={ () => orderForm}/>
                <Route path='/order' exact render={() => orderDetails}/>
            </WithoutRootDiv> 
        );
    };
}
   

export default Cart;