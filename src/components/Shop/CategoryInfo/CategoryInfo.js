import React from 'react';
import CenteredXYText from '../../UI/Text/CenteredXYText/CenteredXYText';
import EllipsisText from '../../UI/Text/EllipsisText/EllipsisText';
import './CategoryInfoNew.css';



const categoryInfo = (props) => (
    <div className='category-info-container'>
        <div className='show-on-md'>
            <div className='category-container'>
                <div className='half'>
                    <CenteredXYText>Current category:</CenteredXYText>
                </div>
                <div className='half'>
                    <EllipsisText>{props.category}</EllipsisText>
                </div>
            </div>
            <div className='subcategory-container'> 
                <div className='half'>
                    <CenteredXYText>Current subcategory:</CenteredXYText>
                </div>
                <div className='half'>
                    <EllipsisText>{props.subcategory}</EllipsisText>
                </div>
            </div>
        </div>
        <div className='show-on-sm'>
            <div className='category-container'>
                <CenteredXYText><span className='hide-on-es'>Category:&nbsp;</span><EllipsisText>{props.category}</EllipsisText></CenteredXYText>
            </div>            
            <div className='subcategory-container'>
                <CenteredXYText>
                    <span className='hide-on-es'>Subcategory:&nbsp;</span><EllipsisText>{props.subcategory}</EllipsisText>                                 
                </CenteredXYText>
            </div>            
        </div>
    </div>

);

export default categoryInfo;