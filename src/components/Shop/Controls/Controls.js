import React from 'react';
import Sort from './Sort/Sort';
import InStockCheckbox from './InStockCheckbox/InStockCheckbox';
import NumberOfItemsPerPage from './NumberOfItemsPerPage/NumberOfitemsPerPage';
import CenteredXYText from '../../UI/Text/CenteredXYText/CenteredXYText';
import './ControlsNew.css';


const controls = (props) => {
    console.log('in controls');
    return(
        <div className="controls-container">
            <div className='shown-products-info'>
                <CenteredXYText>
                    {props.numberOnShownProducts} products shown of {props.numberOfProductsInCategory} products {props.category==='all' ? null : " in category"}
                </CenteredXYText>
            </div>
                <div className='controls'>
                    <div className='control-numb-of-items'>
                            <NumberOfItemsPerPage 
                            changed={props.changeNumberOfItemsPerPage}
                            numberOnShownProducts={props.numberOnShownProducts}
                            possiblePages={props.possiblePages}
                            selectValue={props.numberOfProductsInPageSelectValue}
                            productsToShow={props.numberOfProductsInCategory}/>
                    </div>
                    <div className='control-instock'>
                            <InStockCheckbox onInStockClick={props.onInStockClick} showInStockOnly={props.showInStockOnly}/>
                    </div>  
                    <div className='control-sort'>
                            <Sort onSort={props.onSort} selectValue={props.selectValue}/>
                    </div> 
                </div>

        </div>
    );
};

export default controls;