import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageContainer from './ImageContainer/ImageContainer';
import Button from '../../../UI/Button/Button';
import './ItemNew.css';

const item = (props) => {

    // const ratingStars = [...Array(props.item.rating)].map((_, i) => {
    //  return <FontAwesomeIcon key={i} className='star' icon='star'/>
    // });
    console.log(props.item, 'item')
    
    return (
        <div className='item'>
            <div className="item-border">
            <div className='item-img-container'>
                <ImageContainer src={props.item.imagelink} alt={props.item.name} height="126.5px" clicked={props.clickOnImg}/>
            </div>
            </div>
            
            <div className='info-container'>
            <div className='info-wrapper'>
                <div className='item-border'>
                    <p className='info-name' onClick={props.clickOnImg}>{props.item.titlle}</p>
                    <p className='info-price'>$ {props.item.price.toFixed(2)}</p>
                    <p className='button-container'><Button class='add-button' type='button' clicked={props.clickOnAddBtn}>add</Button></p> 
                    {/* <p className='info-rating'>{ratingStars}</p> */}
                </div>
               
            </div>
            
            </div>
        </div>
    );
};

export default item;