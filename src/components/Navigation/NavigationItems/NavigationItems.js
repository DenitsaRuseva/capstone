import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import '../NavigationItems/NavigationItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WithBadge from '../../../hoc/withBadge/withBadge';
import WithTooltip from '../../../hoc/WithTooltip/WithTooltip';


const navigationItems = (props) => (
    <ul className='navigationItems'>
        <NavigationItem link='/' exact={true} clicked={props.hideSideDrawer}>Home</NavigationItem>
        <NavigationItem link="/shopping" clicked={props.hideSideDrawer}>Shop</NavigationItem>
        {props.badgeCount > 0 ? (
         <div className='navigationItems'>
            <NavigationItem link="/cart">
                <WithBadge  showBadge={true} count={props.badgeCount}><FontAwesomeIcon icon='shopping-cart' aria-hidden="true"/></WithBadge>
            </NavigationItem>
        </div>   
        ) : (
            <div className='navigationItems empty-cart'>
            <NavigationItem>
               <WithTooltip showTooltip={true} position='down' message='Cart is empty'><WithBadge  showBadge={props.badgeCount > 0} count={props.badgeCount}><FontAwesomeIcon icon='shopping-cart' aria-hidden="true"/></WithBadge></WithTooltip> 
            </NavigationItem>
        </div>   
        )}
    </ul>
);

export default navigationItems;