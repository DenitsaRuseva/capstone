import React from 'react';
import CenteredXYText from '../../UI/Text/CenteredXYText/CenteredXYText';
import EllipsisText from '../../UI/Text/EllipsisText/EllipsisText';
import './CategoryInfo.css';



const categoryInfo = (props) => (
    <div className='category-info-container'>
        <div className='shop-row'>
            <div className='category-container'>
                <div className='half'>
                    <CenteredXYText>Category:</CenteredXYText>
                </div>
                <div className='half'>
                    <EllipsisText>{props.category}</EllipsisText>
                </div>
            </div>
            <div className='subcategory-container'> 
                <div className='half'>
                    <CenteredXYText>Subcategory:</CenteredXYText>
                </div>
                <div className='half'>
                    <EllipsisText>{props.subcategory}</EllipsisText>
                </div>
            </div>
        </div>
    </div>
);

export default categoryInfo;