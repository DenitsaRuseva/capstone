import React from 'react';
import CategoryButtons from './CategoryButtons/CategoryButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../Logo/Logo';
import './ShopSideBarNew.css';

const shopSideBar = (props) => {


    const attachedClasses = props.shownCategoryMenu ? ['side-bar-wrapper show-categories'] : ['side-bar-wrapper'];
    console.log('in shop side bar');
    return (
        <div className={attachedClasses}>
            <div className='hide-on-md'> 
                <div className='md-only'><span>Categories:</span></div>
            </div>
            <div className='hide-on-l'>
                <div className='md-only' onClick={() => props.toggleCategoryMenu()}><span>Shop by category <FontAwesomeIcon icon="chevron-down"/></span></div>
            </div>
            <div className='side-bar-container'>
                <div className='side-bar'> 
                    <CategoryButtons
                    clickOnCategory={props.clickOnCategory}
                    clickOnSubcategory={props.clickOnSubcategory}
                    currentCategory={props.currentCategory}
                    clickedCategories={props.clickedCategories}/>
                </div>
                <Logo class='big'/>
            </div>
        </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         categoriesAndSubcat: state.categoriesAndSubcat
//     };
// };

export default shopSideBar;