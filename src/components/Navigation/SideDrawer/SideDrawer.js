import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = (props) => {
    const attachedClasses = props.showSideDrawer ? ['sideDrawer', 'open'] : ['sideDrawer', 'close'];
    return(
        <div className={attachedClasses.join(' ')}>
            <nav>
                <NavigationItems hideSideDrawer={props.hideSideDrawer} showBadge={false} showTooltip={props.badgeCount < 1} badgeCount={props.badgeCount}/>
            </nav>
        </div>
    );
    
   
};

export default sideDrawer;