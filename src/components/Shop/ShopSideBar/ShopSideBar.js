import React from 'react';
import CategoryButtons from './CategoryButtons/CategoryButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ShopSideBarNew.css';

const shopSideBar = (props) => {


    const attachedClasses = props.shownCategoryMenu ? ['side-bar-wrapper show-categories'] : ['side-bar-wrapper'];
    console.log('in shop side bar');
    return (
        <div className={attachedClasses}>
            <div className='hide-on-sm'> 
                <p className='text'>Shop by category</p>
            </div>
                <div className='md-only text' onClick={() => props.toggleCategoryMenu()}>Shop by category <FontAwesomeIcon icon="chevron-down"/></div>
                <div className='side-bar-container'>
                    <div className='side-bar'> 
                        <CategoryButtons
                        clickOnCategory={props.clickOnCategory}
                        clickOnSubcategory={props.clickOnSubcategory}
                        currentCategory={props.currentCategory}
                        clickedCategories={props.clickedCategories}/>
                    </div>
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