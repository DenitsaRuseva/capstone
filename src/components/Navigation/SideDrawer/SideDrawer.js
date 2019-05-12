import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

const sideDrawer = (props) => {
    const attachedClasses = props.showSideDrawer ? ['sideDrawer', 'open'] : ['sideDrawer', 'close'];
    return(
        <Backdrop show={props.showSideDrawer} clicked={props.hideSideDrawer}>
        <div className={attachedClasses.join(' ')}>
            <nav>
                <NavigationItems hideSideDrawer={props.hideSideDrawer} showBadge={false} showTooltip={false} clickOnEmptyCart={props.clickOnEmptyCart} badgeCount={props.badgeCount}/>
            </nav>
        </div>
        </Backdrop>
    );
    
   
};

export default sideDrawer;