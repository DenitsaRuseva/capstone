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
                <div className='controls'>
                    <div className='control-numb-of-items'>
                        <CenteredXYText>
                            <NumberOfItemsPerPage 
                            changed={props.changeNumberOfItemsPerPage}
                            numberOnShownProducts={props.numberOnShownProducts}
                            possiblePages={props.possiblePages}
                            selectValue={props.numberOfProductsInPageSelectValue}
                            productsToShow={props.numberOfProductsInCategory}/>
                        </CenteredXYText>
                    </div>
                    <div className='control-instock'>
                         <CenteredXYText>
                            <InStockCheckbox onInStockClick={props.onInStockClick} showInStockOnly={props.showInStockOnly}/>
                        </CenteredXYText> 
                    </div>  
                    <div className='control-sort'>
                        <CenteredXYText>
                            <Sort onSort={props.onSort} selectValue={props.selectValue}/>
                        </CenteredXYText>
                    </div> 
                </div>
                <CenteredXYText>
                    {props.numberOnShownProducts} products shown of {props.numberOfProductsInCategory} products {props.category==='all' ? null : " in category"}
                </CenteredXYText>
        </div>
    );
};

export default controls;