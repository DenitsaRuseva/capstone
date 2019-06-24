import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from '../../components/Shop/Controls/Controls';
import ShopSideBar from '../../components/Shop/ShopSideBar/ShopSideBar';
import ItemsGallery from '../../components/Shop/ItemsGallery/ItemsGallery';
import PropsRoute from '../../hoc/Routes/PropsRoute'; 
import Spinner from '../../components/UI/Spinner/Spinner';
import './ShopNew.css';
import WithoutRootDiv from '../../hoc/WithoutRootDiv/WithoutRootDiv';
import PageNumbers from '../../components/Shop/PageNumbersButtons/PageNumbersButtons';
import CategoryInfo from '../../components/Shop/CategoryInfo/CategoryInfo';
import Logo from '../../components/Logo/Logo';
import {flattenArray} from '../../utility';
import * as action from '../../store/actions/index';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import axios from 'axios';




class Shop extends Component {

    state = {
        loading: true,
        sort: {
            sortBy: 'none',
            order: 'none'
        },
        showInStockOnly: false,
        currentCategory: 'all',
        currentSubcategory: 'all',
        productsToShowIds: [],
        numberOfProductsInCategory: null,
        shownCategoryMenu: false,
        clickedCategories: [],
        clickedCategoriesNumb: 0,
        selectValue: 'none_none',
        selectedProduct: '',
        numberOfProductsInPage: 24,
        currentPage: 1,
        numberOfProductsInPageSelectValue: '24'
    };


    componentDidMount(){
        console.log('in CDM Shop');
        if(this.props.shopMounted){
            this.setState({
                loading: false,
                sort: {
                    ...this.state.sort,
                    sortBy: this.props.sort.sortBy,
                    order: this.props.sort.order
                },
                showInStockOnly: this.props.showInStockOnly,
                currentCategory: this.props.currentCategory,
                currentSubcategory: this.props.currentSubcategory,
                productsToShowIds: [...this.props.productsToShowIds],
                numberOfProductsInCategory: this.props.numberOfProductsInCategory,
                shownCategoryMenu: this.props.shownCategoryMenu,
                clickedCategories: [...this.props.clickedCategories],
                clickedCategoriesNumb: this.state.clickedCategoriesNumb,
                selectValue: this.props.selectValue,
                loading: this.props.loading,
                numberOfProductsInPage: this.props.numberOfProductsInPage,
                currentPage: this.props.currentPage,
                numberOfProductsInPage: this.props.numberOfProductsInPage
            });
        }
        else if(!this.props.shopMounted && this.state.loading) {
            // const numberOfCategories = this.props.categoriesAndSubcat.length;
            let clickedCategories = [...Array(this.props.categoriesAndSubcat.length)].fill(false);
            if(this.props.match.params.category){
                    const currentURLCategory = this.props.categoriesByIds[this.props.match.params.category] ? this.props.match.params.category : 'all';
                    const currentURLSubcategory = (currentURLCategory !== 'all' && this.props.match.params.subcategory && this.props.categoriesByIds[this.props.match.params.category][this.props.match.params.subcategory]) ? this.props.match.params.subcategory : 'all';
                    if(currentURLCategory === 'all'){
                        this.props.history.replace('/shopping');
                        this.setState({
                            productsToShowIds: [...this.props.allProductsByIds],
                            numberOfProductsInCategory: this.props.allProductsByIds.length,
                            clickedCategories: [...clickedCategories],
                            loading: false
                        });
                    }
                    else {
                        let productsToShowIds =  this.makeProductsToShow(currentURLCategory, currentURLSubcategory);
        
                        if(currentURLSubcategory === 'all'){
                            this.props.history.replace('/shopping/' + currentURLCategory);
                            clickedCategories = this.props.categoriesAndSubcat.map((el, i) => {
                                if(el.category === currentURLCategory){
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            });
                            this.setState({
                            currentCategory: currentURLCategory,
                            productsToShowIds: [...productsToShowIds],
                            numberOfProductsInCategory: productsToShowIds.length,
                            clickedCategories: [...clickedCategories],
                            clickedCategoriesNumb: 1,
                            loading: false
                            });
                            this.props.history.replace('/shopping/' + currentURLCategory);
                        }
                        else {
                            const numberOfProductsInCategory = this.countProductsInCategory(currentURLCategory);
                            clickedCategories = this.props.categoriesAndSubcat.map((el, i) => {
                                if(el.category === currentURLCategory){
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            });
                            this.setState({
                            currentCategory: currentURLCategory,
                            currentSubcategory: currentURLSubcategory,
                            productsToShowIds: [...productsToShowIds],
                            numberOfProductsInCategory: numberOfProductsInCategory,
                            clickedCategories: [...clickedCategories],
                            clickedCategoriesNumb: 1,
                            loading: false
                            });
                            this.props.history.replace('/shopping/' + currentURLCategory + '/' + currentURLSubcategory);
                        }
                    };
                }
                else {
                    this.setState({
                        productsToShowIds: [...this.props.allProductsByIds],
                        numberOfProductsInCategory: this.props.allProductsByIds.length,
                        clickedCategories: [...clickedCategories],
                        loading: false
                    });
                    this.props.history.replace('/shopping');
                };
            };
    };

    componentWillUnmount(){
        console.log('in component will unmount shop');
        this.props.onShopUnmount(this.state);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state === nextState){
            return false;
        }
        return true;
    };

    makeProductsToShow = (category, subcategory) => {
        let productsToShow = this.props.categoriesByIds[category][subcategory].map(subcategory => {
            return this.props.subcategoriesByIds[subcategory].map(id => {
                return id;
            });
        });
        productsToShow = flattenArray(productsToShow);
        return productsToShow;
    };

    checkDoesInStockIsChecked = (products) => {
        if(this.state.showInStockOnly){
            products = products.filter(id => parseFloat(this.props.allProducts[id].stock) !== 0);
        };
        return products;
    };

    toggleSubcategoriesDropdown = (categoryId) => {
        // let currentStateOfCategoryClicked = this.state.clickedCategories[categoryId];
        // let updatedClickedCategories = [...Array(this.state.clickedCategories.length).fill(false)];
        // updatedClickedCategories[categoryId] = !currentStateOfCategoryClicked;
        // return updatedClickedCategories;
        let updatedClickedCategories = [...this.state.clickedCategories];
        updatedClickedCategories[categoryId] = !updatedClickedCategories[categoryId];
        return updatedClickedCategories;
    };

    showSubcategoriesDropdown = (categoryId) => {
        let clickedCategories = [...this.state.clickedCategories];
        clickedCategories[categoryId] = true;
        return clickedCategories;  
    };

    countProductsInCategory = (category) => {
        let number = 0;
        this.props.categoriesByIds[category].all.map(subcategory => {
        if(toString(this.props.subcategoriesByIds[subcategory][0])){
            number = number + this.props.subcategoriesByIds[subcategory].length;
        };
    });
    return number;
    };


    sideBarCategoryClickHandler = (categoryId, categoryClicked) => {

        if(this.state.currentCategory === categoryClicked){
            let productsToShowIds = [...this.props.allProductsByIds];
            productsToShowIds = this.sortProducts(productsToShowIds, this.state.sort.sortBy, this.state.sort.order);
            productsToShowIds = this.checkDoesInStockIsChecked(productsToShowIds);
            this.props.history.replace('/shopping');
            const clickedCategories = this.toggleSubcategoriesDropdown(categoryId);
            let updatedClickedCategoriesNumb = 0;
            clickedCategories.map(i  => {
                if(i){
                    updatedClickedCategoriesNumb = updatedClickedCategoriesNumb + 1;
                };
            });
            this.setState({
                currentCategory: 'all',
                currentSubcategory: 'all',
                productsToShowIds: productsToShowIds,
                numberOfProductsInCategory: productsToShowIds.length,
                clickedCategories: clickedCategories,
                clickedCategoriesNumb: updatedClickedCategoriesNumb,
                currentPage: 1,
                shownCategoryMenu: false
            });
        }
        else {
            this.props.history.replace(`/shopping/${categoryClicked}`);
            let productsToShowIds = this.makeProductsToShow(categoryClicked, 'all');
            productsToShowIds = this.sortProducts(productsToShowIds, this.state.sort.sortBy, this.state.sort.order);
            const numberOfProductsInCategory = productsToShowIds.length;
            productsToShowIds = this.checkDoesInStockIsChecked(productsToShowIds);
            const clickedCategories = this.showSubcategoriesDropdown(categoryId);
            let updatedClickedCategoriesNumb = 0;
            clickedCategories.map(i  => {
                if(i){
                    updatedClickedCategoriesNumb = updatedClickedCategoriesNumb + 1;
                };
            });
            this.setState({
                currentCategory: categoryClicked,
                currentSubcategory: 'all',
                productsToShowIds: productsToShowIds,
                numberOfProductsInCategory: numberOfProductsInCategory,
                clickedCategories: clickedCategories,
                clickedCategoriesNumb: updatedClickedCategoriesNumb,
                currentPage: 1
            });
        };
    };


    sideBarSubcategoryClickHandler = (category, subcategoryClicked) => {
        if(this.state.currentSubcategory === subcategoryClicked){
            return;
        };
        let productsToShowIds = this.makeProductsToShow(category, subcategoryClicked);

        const numberOfProductsInCategory = this.countProductsInCategory(category);
        

        productsToShowIds = this.sortProducts(productsToShowIds, this.state.sort.sortBy, this.state.sort.order);

        productsToShowIds = this.checkDoesInStockIsChecked(productsToShowIds);


        this.setState({
            currentCategory: category,
            currentSubcategory: subcategoryClicked,
            productsToShowIds: productsToShowIds,
            shownCategoryMenu: false,
            numberOfProductsInCategory: numberOfProductsInCategory,
            currentPage: 1
        });
    };

    toggleCategoryMenuHandler = () => {
        this.setState( ( prevState ) => {
            return { shownCategoryMenu: !prevState.shownCategoryMenu };
        } );
    };

    sortItemsHandler = (value) => {
        const sortCriteria = value;
        const sortDate = sortCriteria.split('_');
        if(this.state.sort.sortBy === sortDate[0] && this.state.sort.order === sortDate[1]){
            return;
        }
        else {
            if(sortDate[0] === 'none'){
                let productsToShowIds = this.makeProductsToShow(this.state.currentCategory, this.state.currentSubcategory);
                this.setState({
                    sort: {
                        sortBy: 'none',
                        order: 'none'
                    },
                    productsToShowIds: [...productsToShowIds],
                    selectValue: value,
                    currentPage: 1
                });
            }
            else if(this.state.sort.sortBy === sortDate[0]){
                const updatedproductsToShowIds = [...this.state.productsToShowIds].reverse();
                this.setState({
                    sort: {
                        sortBy: sortDate[0],
                        order: sortDate[1]
                    },
                    productsToShowIds: updatedproductsToShowIds,
                    selectValue: value,
                    currentPage: 1
                });
            }
            else {
                let productsToShowIds = [...this.state.productsToShowIds];
                productsToShowIds = this.sortProducts(productsToShowIds, sortDate[0], sortDate[1]);
                this.setState({
                    sort: {
                        sortBy: sortDate[0],
                        order: sortDate[1]
                    },
                    productsToShowIds: productsToShowIds,
                    selectValue: value,
                    currentPage: 1
                }); 
            };
        };
    };

    sortProducts = (products, sortCriteria, order) => {
        switch(sortCriteria){
            case 'none': return products;
            case 'name': return this.sortAlphabetical(products, order);
            case 'price': return this.sortNumbers(products, sortCriteria, order);
            case 'rating': return this.sortNumbers(products, sortCriteria, order);
        };
    };
   
    sortAlphabetical = (products, order) => {
        products.sort((a, b) => {
            const nameA = this.props.allProducts[a].name.toUpperCase();
            const nameB = this.props.allProducts[b].name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        if(order === 'descending'){
            products = products.reverse(); 
        };
        return products; 
};
    
    sortNumbers = (products, sortCriteria, order) => {
        products.sort((a, b) => {
            return this.props.allProducts[a][sortCriteria] - this.props.allProducts[b][sortCriteria];
        });
        if(order === 'descending'){
            products = products.reverse(); 
        }
        return products;   
    };

    inStockClickHandler = () => {
        if(this.state.showInStockOnly){
            let productsToShowIds = this.makeProductsToShow(this.state.currentCategory, this.state.currentSubcategory);
            const numberOfProductsInCategory = this.countProductsInCategory(this.state.currentCategory);
            productsToShowIds = this.sortProducts(productsToShowIds, this.state.sort.sortBy, this.state.order);
            this.setState({
                showInStockOnly: false,
                productsToShowIds: [...productsToShowIds],
                numberOfProductsInCategory: numberOfProductsInCategory,
                currentPage: 1
            });
        }
        else {
            const productsToShowIds = this.state.productsToShowIds.filter(id => parseFloat(this.props.allProducts[id].stock) !== 0);
            const numberOfProductsInCategory = this.countProductsInCategory(this.state.currentCategory);
            this.setState({
                showInStockOnly: true,
                productsToShowIds: [...productsToShowIds],
                numberOfProductsInCategory: numberOfProductsInCategory,
                currentPage: 1
            });
        };
    };

    showPageHandler = (page) => {
        this.setState({currentPage: page});
    };

    showProductsOnNextPage = () => {
        this.setState(prevState => ({currentPage: prevState.currentPage + 1}));
    };

    showProductsOnPreviousPage = () => {
        this.setState(prevState => ({currentPage: prevState.currentPage - 1}))
    };

    changeNumberOfItemsPerPageHandler = (numb) => {
            numb === 'all' ? this.setState({numberOfProductsInPage: this.state.numberOfProductsInCategory, numberOfProductsInPageSelectValue: numb, currentPage: 1}) :
            this.setState({numberOfProductsInPage: numb, numberOfProductsInPageSelectValue: numb, currentPage: 1});
    };

    render(){
        console.log('in render shop');
        console.log(this.state);
        const possiblePages = Math.trunc(this.state.productsToShowIds.length / this.state.numberOfProductsInPage) + (this.state.productsToShowIds.length % this.state.numberOfProductsInPage === 0 ? 0 : 1)
        let shop = <Spinner/>;
        if(!this.state.loading && !this.props.error){
            shop = (
                <div className='shop'>
                    <PropsRoute path='/shopping' component={Logo} class='small'/>
                    <PropsRoute path='/shopping' 
                            component={ShopSideBar} 
                            clickOnCategory={this.sideBarCategoryClickHandler}
                            clickOnSubcategory={this.sideBarSubcategoryClickHandler}
                            toggleCategoryMenu={this.toggleCategoryMenuHandler}
                            shownCategoryMenu={this.state.shownCategoryMenu}
                            currentCategory={this.state.currentCategory}
                            clickedCategories={this.state.clickedCategories}
                            clickedCategoriesNumb={this.state.clickedCategoriesNumb}
                            categoriesAndSubcat={this.props.categoriesAndSubcat}/>
                        <PropsRoute path='/shopping' component={CategoryInfo}
                            category={this.state.currentCategory}
                            subcategory={this.state.currentSubcategory}/>
                        
                        <PropsRoute path='/shopping' component={Controls} 
                            numberOfProductsInPageSelectValue={this.state.numberOfProductsInPageSelectValue}
                            changeNumberOfItemsPerPage={this.changeNumberOfItemsPerPageHandler}
                            possiblePages={possiblePages}
                            onSort={this.sortItemsHandler} 
                            category={this.state.currentCategory}
                            // subcategory={this.state.currentSubcategory}
                            onInStockClick={this.inStockClickHandler}
                            numberOfProductsInCategory={this.state.numberOfProductsInCategory}
                            numberOnShownProducts={possiblePages === this.state.currentPage || possiblePages === 0 ?
                            this.state.productsToShowIds.length : this.state.numberOfProductsInPage*this.state.currentPage}
                            selectValue={this.state.selectValue}
                            showInStockOnly={this.state.showInStockOnly}
                        />
                        <PropsRoute path='/shopping' component={ItemsGallery} 
                            productsToShowIds={this.state.productsToShowIds.slice((this.state.currentPage - 1)*this.state.numberOfProductsInPage, (this.state.currentPage - 1)*this.state.numberOfProductsInPage + this.state.numberOfProductsInPage)}
                            clickOnAddBtn={this.props.addProductToCart} 
                            clickOnImg={this.props.showProductPage}/>
                        {possiblePages > 1 ?
                        <PropsRoute path='/shopping' component={PageNumbers}
                            currentPage={this.state.currentPage}
                            possiblePages=
                            {possiblePages} 
                            clickToPageNumber={this.showPageHandler}
                            goToNextPage={this.showProductsOnNextPage}
                            goToPreviousPage={this.showProductsOnPreviousPage}/> : null}
                </div>
            );
        };
        if(this.props.error){
            alert('in');
            shop = (
                <div className='shop'>
                        <PropsRoute path='/shopping' 
                            component={ShopSideBar} 
                            clickOnCategory={() => null}
                            clickOnSubcategory={() => null}
                            toggleCategoryMenu={() => null}
                            shownCategoryMenu={() => null}
                            currentCategory={this.state.currentCategory}
                            clickedCategories={this.state.clickedCategories}/>
                        <PropsRoute path='/shopping' component={CategoryInfo}
                            category={this.state.currentCategory}
                            subcategory={this.state.currentSubcategory}/>
                        <PropsRoute path='/shopping' component={Controls} 
                            changeNumberOfItemsPerPage={() => null}
                            possiblePages={possiblePages}
                            onSort={() => null} 
                            category={this.state.currentCategory}
                            onInStockClick={() => null}
                            numberOfProductsInCategory={0}
                            numberOnShownProducts={0}
                            selectValue={this.state.selectValue}
                        /> 
                </div>
            );
        }
        
        return <WithoutRootDiv>{shop}</WithoutRootDiv>
    };
};

const mapStateToProps = state => {
    return {
        categoriesAndSubcat: state.categoriesAndSubcat,
        categoriesByIds: state.categoriesByIds, 
        subcategoriesByIds: state.subcategoriesByIds,
        allProducts: state.allProducts,
        allProductsByIds: state.allProductsByIds,
        sort: state.sort,
        showInStockOnly: state.showInStockOnly,
        currentCategory: state.currentCategory,
        currentSubcategory: state.currentSubcategory,
        productsToShowIds: state.productsToShow,
        numberOfProductsInCategory: state.numberOfProductsInCategory,
        shownCategoryMenu: state.shownCategoryMenu,
        clickedCategories: state.clickedCategories,
        clickedCategoriesNumb: state.clickedCategoriesNumb,
        selectValue: state.selectValue,
        loading: state.loading,
        currentPage: state.currentPage,
        numberOfProductsInPage: state.numberOfProductsInPage,
        shopMounted: state.shopMounted,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onShopUnmount: (state) => {dispatch(action.saveShopState(state))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Shop, axios));