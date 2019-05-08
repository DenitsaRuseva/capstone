import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
import Carousel from '../../container/Carousel/Carousel';
import Shop from '../../container/Shop/Shop';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import PropsRoute from '../Routes/PropsRoute';
import Cart from '../../container/Cart/Cart';
import ContactPage from '../../container/ContactPage/ContactPage';
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner';
import About from '../../components/About/About';
import './Layout.css';
import WithoutRootDiv from '../WithoutRootDiv/WithoutRootDiv';
import WithErrorHandler from '../WithErrorHandler/WithErrorHandler';
import axios from 'axios';
import {removeArrayElement, addElementToArray, updateArrayElement, sumArrayElements} from '../../utility';


class Layout extends Component {

    state = {
        showSideDrawer: false,
        productsInCartIds: [],
        quantityOfEachProducts: [],
        totalPrice: 0,
        quantityReduce: [],
        orderMade: false,
        selectedProduct: '',
        numberOfProductsInCart: 0
    }

    componentDidMount(){
        console.log('CDM Layout');
        this.props.onFetchProducts();
    };

    toggleSideDrawerHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    };


    addNewProductInCart = (productId, quantity) => {
        const productQuantityReduce = quantity > this.props.allProducts[productId].stock; //boolean; hold reduce to current product;
       
        //check does entered quantity + quantity of product in cart is greater then stock of product
         //if its greater -> updatedQuantity = stock of product
         //if its not -> updatedQuantity = entered quantity + quantity of product in cart
        const productQuantity = productQuantityReduce ? this.props.allProducts[productId].stock : quantity;

        const updatedTotalPrice = (this.state.totalPrice*1000 + (this.props.allProducts[productId].price*productQuantity*1000))/1000; 
        const updatedproductsInCartIds = addElementToArray(this.state.productsInCartIds, productId);
        const updatedQuantityOfEachProducts = addElementToArray(this.state.quantityOfEachProducts, productQuantity);
        const updatedQuantityReduce = addElementToArray(this.state.quantityReduce, productQuantityReduce); //array; hold reduce to all products in cart;
        const updatedNumberOfProductsInCart = sumArrayElements(updatedQuantityOfEachProducts);
        
        this.setState({
            productsInCartIds: updatedproductsInCartIds,
            quantityOfEachProducts: updatedQuantityOfEachProducts,
            totalPrice: updatedTotalPrice,
            quantityReduce: updatedQuantityReduce,
            numberOfProductsInCart: updatedNumberOfProductsInCart
        });
    };

    changeProductInCartQuantityHandler = (enteredQuantity, productId, index) => { //Used in cart
        const quantity = Math.floor(enteredQuantity);

        //boolean; hold reduce to current product
        const productQuantityReduce = (quantity) > this.props.allProducts[productId].stock;
        
         //check does entered quantity in cart is greater then stock of product
         //if its greater -> updatedQuantity = stock of product
         //if its not -> updatedQuantity = entered quantity
        const updatedProductQuantity = productQuantityReduce ?
        this.props.allProducts[productId].stock : 
        quantity;

        //total price -> first remove price of product*quntity which alredy is in cart
        //then add product price * updatedProductQuantity
        const updatedTotalPrice = (this.state.totalPrice*1000 - 
        (this.props.allProducts[productId].price * this.state.quantityOfEachProducts[index]*1000) + 
        (this.props.allProducts[productId].price*updatedProductQuantity*1000))/1000; 
        const updatedQuantityOfEachProducts = updateArrayElement(this.state.quantityOfEachProducts, index, updatedProductQuantity);
        const updatedQuantityReduce = updateArrayElement(this.state.quantityReduce, index, productQuantityReduce);
        const updatedNumberOfProductsInCart = sumArrayElements(updatedQuantityOfEachProducts);

    
        
        this.setState({
            quantityOfEachProducts: updatedQuantityOfEachProducts,
            totalPrice: updatedTotalPrice,
            quantityReduce: updatedQuantityReduce,
            numberOfProductsInCart: updatedNumberOfProductsInCart
        });
        
    }

    increaseProductInCartQuantityHandler = (enteredQuantity, productId, index) => { //Used in shop and in product page, where clicking
                                                                                    //to add button must add certain quantiti to
                                                                                    //alredy existing quantity (quantity is always increase);
                                                                                    //not used in cart, where quantity may decrease;
        const quantity = Math.floor(enteredQuantity);

        //boolean; hold reduce to current product
        const productQuantityReduce = (quantity + this.state.quantityOfEachProducts[index]) > this.props.allProducts[productId].stock;
        
         //check does entered quantity + quantity of product in cart is greater then stock of product
         //if its greater -> updatedQuantity = stock of product
         //if its not -> updatedQuantity = entered quantity + quantity of product in cart
        const updatedProductQuantity = productQuantityReduce ?
        this.props.allProducts[productId].stock : 
        quantity + this.state.quantityOfEachProducts[index];

        //total price -> first remove price of product*quntity which alredy is in cart
        //then add product price * updatedProductQuantity
        const updatedTotalPrice = (this.state.totalPrice*1000 - 
        (this.props.allProducts[productId].price * this.state.quantityOfEachProducts[index]*1000) + (this.props.allProducts[productId].price*updatedProductQuantity*1000))/1000; 
        const updatedQuantityOfEachProducts = updateArrayElement(this.state.quantityOfEachProducts, index, updatedProductQuantity);
        const updatedQuantityReduce = updateArrayElement(this.state.quantityReduce, index, productQuantityReduce);
        const updatedNumberOfProductsInCart = sumArrayElements(updatedQuantityOfEachProducts);
        
        this.setState({
            quantityOfEachProducts: updatedQuantityOfEachProducts,
            totalPrice: updatedTotalPrice,
            quantityReduce: updatedQuantityReduce,
            numberOfProductsInCart: updatedNumberOfProductsInCart
        });
    }

    addProductToCartHandler = (productId, enteredQuantity = 1) => { //initial value is set to 1 because of shop
        const quantity = Math.floor(enteredQuantity);
        if(quantity == 0){
            return;
        };
        if (this.state.productsInCartIds.indexOf(productId) === -1) { //If same product isn`t in cart;
            this.addNewProductInCart(productId, quantity);
        } else { //If same product is in cart alredy;
            this.increaseProductInCartQuantityHandler(quantity, productId, this.state.productsInCartIds.indexOf(productId));
        };
    };


    
    removeProductHandller = (productId, index) => {
        const updatedTotalPrice = (this.state.totalPrice*1000 - (this.props.allProducts[productId].price*this.state.quantityOfEachProducts[index]*1000))/1000; 
        const updatedproductsInCartIds = removeArrayElement(this.state.productsInCartIds, index);
        const updatedQuantitiesOfEachProducts = removeArrayElement(this.state.quantityOfEachProducts, index);
        const updatedQuantityReduce = removeArrayElement(this.state.quantityReduce, index);
        const updatedNumberOfProductsInCart = sumArrayElements(updatedQuantitiesOfEachProducts);


        this.setState({
            productsInCartIds: updatedproductsInCartIds,
            quantityOfEachProducts: updatedQuantitiesOfEachProducts,
            totalPrice: updatedTotalPrice,
            quantityReduce: updatedQuantityReduce,
            numberOfProductsInCart: updatedNumberOfProductsInCart
        });
    };

    makeOrderHandler = (formIsValid) => {
       if(formIsValid){
            this.setState({
                orderMade: true
            });  
       };
       return;
    };

    removeZeroQuantitiesHandler = () => {
        let updatedproductsInCartIds = [...this.state.productsInCartIds];
        let updatedQuantitiesOfEachProducts = [...this.state.quantityOfEachProducts];
        let updatedQuantityReduce = [...this.state.quantityReduce];
        let haveZeroQuantity = false;
        for(let i = this.state.productsInCartIds.length - 1; i >= 0; i--){
            if(this.state.quantityOfEachProducts[i] === 0){
               haveZeroQuantity = true;
               updatedproductsInCartIds = removeArrayElement(updatedproductsInCartIds, i);
               updatedQuantitiesOfEachProducts = removeArrayElement(updatedQuantitiesOfEachProducts, i);
               updatedQuantityReduce = removeArrayElement(updatedQuantityReduce, i);
            };
        };
        if(haveZeroQuantity){
        this.setState({
                    productsInCartIds: updatedproductsInCartIds,
                    quantityOfEachProducts: updatedQuantitiesOfEachProducts,
                    quantityReduce: updatedQuantityReduce
                });
        };
    };

    resetProductsInCatrHandler = () => {
        this.props.history.replace('/');
        this.setState({productsInCartIds: [], quantityOfEachProducts: [], totalPrice: [], orderMade: false, numberOfProductsInCart: 0})
    };

    showProductPageHandler = (id) => {
        this.setState({selectedProduct: id});
        const url = "/product?name=" + this.props.allProducts[id].name;
        this.props.history.push(url);
    };

    render(){
        console.log('in render layout');

        const carouselRoute = this.props.loadingCarousel ?
        <Route path="/" exact render={() => <Spinner/>}/> : 
        <PropsRoute path="/" exact 
        component={ Carousel } 
        showProductPage={(id) => this.showProductPageHandler(id)}
        addProductToCart={this.addProductToCartHandler}
        />

        const shopRoute = this.props.loadingShop ? <Route path='/shopping' render={() => <Spinner/>}/> : (
            <WithoutRootDiv>
                <Switch>
                    <PropsRoute path='/shopping/:category/:subcategory' component={Shop} addProductToCart={this.addProductToCartHandler} showProductPage={(id) => this.showProductPageHandler(id)}/>
                    <PropsRoute path='/shopping/:category' component={Shop} addProductToCart={this.addProductToCartHandler} showProductPage={(id) => this.showProductPageHandler(id)}/>
                    <PropsRoute path="/shopping"  exact component={Shop} addProductToCart={this.addProductToCartHandler} showProductPage={(id) => this.showProductPageHandler(id)}/>
                </Switch>
            </WithoutRootDiv>
        );

        
        const productsRoute = this.props.allProducts.length ?  
            <PropsRoute path='/product' 
            component={Product}
            addProductToCart={this.addProductToCartHandler}
            product={this.state.selectedProduct}
            /> : <Spinner/>

        return (
            <div className='layout'>
                <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} badgeCount={this.state.numberOfProductsInCart}/>
                <SideDrawer showSideDrawer={this.state.showSideDrawer} hideSideDrawer={this.toggleSideDrawerHandler}/>
                <main className='main'>
                    <Switch>
                    {productsRoute}
                    <PropsRoute 
                        path='/cart' 
                        exact
                        component={Cart} 
                        productsInCartIds={this.state.productsInCartIds} 
                        productsQuantities={this.state.quantityOfEachProducts}
                        changeQuantity={this.changeProductInCartQuantityHandler}
                        removeProduct={this.removeProductHandller}
                        orderMade={this.state.orderMade}
                        totalPrice={this.state.totalPrice}
                        makeOrder={this.makeOrderHandler}
                        cleanState={this.resetProductsInCatrHandler}
                        quantityReduce={this.state.quantityReduce}
                        clearZeroQuantities={this.removeZeroQuantitiesHandler}/>
                    <PropsRoute 
                        path='/order' 
                        exact
                        component={Cart} 
                        productsInCartIds={this.state.productsInCartIds} 
                        productsQuantities={this.state.quantityOfEachProducts}
                        changeQuantity={this.changeProductInCartQuantityHandler}
                        removeProduct={this.removeProductHandller}
                        orderMade={this.state.orderMade}
                        totalPrice={this.state.totalPrice}
                        makeOrder={this.makeOrderHandler}
                        cleanState={this.resetProductsInCatrHandler}
                        quantityReduce={this.state.quantityReduce}
                        clearZeroQuantities={this.removeZeroQuantitiesHandler}/>
                    <Route path="/contact" exact component={ContactPage}/>
                    <Route path='/about' exact component={About}/>
                    {carouselRoute} 
                    {shopRoute}
                    <Route render={() => this.props.history.replace('/')}/> 
                    </Switch>
                </main>
                <Footer/>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        loadingShop: state.loadingShop,
        loadingCarousel: state.loadingCarousel,
        allProducts: state.allProducts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => {dispatch(action.fetchProducts())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Layout, axios));