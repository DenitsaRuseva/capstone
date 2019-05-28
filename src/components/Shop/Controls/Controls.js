import React from 'react';
import CategoryName from './CategoryName/CategoryName';
import Sort from './Sort/Sort';
import InStockCheckbox from './InStockCheckbox/InStockCheckbox';
import NumberOfProducts from './NumberOfProducts/NumberOfProducts';
import NumberOfItemsPerPage from './NumberOfItemsPerPage/NumberOfitemsPerPage';
import './ControlsNew.css';


const controls = (props) => {
    console.log('in controls');
    return(
        <div className="controls-container">
            <div className='controls'>
            
                <CategoryName label='Category' category={props.category}/>
                <CategoryName label='Subcategory' category={props.subcategory}/>
                <Sort onSort={props.onSort} selectValue={props.selectValue}/>
                <InStockCheckbox onInStockClick={props.onInStockClick} showInStockOnly={props.showInStockOnly}/>
                <NumberOfItemsPerPage 
                    changed={props.changeNumberOfItemsPerPage}
                    numberOnShownProducts={props.numberOnShownProducts}
                    possiblePages={props.possiblePages}
                    selectValue={props.numberOfProductsInPageSelectValue}
                    productsToShow={props.numberOfProductsInCategory}/>
                <NumberOfProducts 
                    category={props.category}
                    numberOnShownProducts={props.numberOnShownProducts}
                    numberOfProductsInCategory={props.numberOfProductsInCategory}/>
            </div>
        </div>
    );
};

export default controls;