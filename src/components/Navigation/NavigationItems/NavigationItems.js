import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import '../NavigationItems/NavigationItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WithBadge from '../../../hoc/withBadge/withBadge';


const navigationItems = (props) => (
    <ul className='navigationItems'>
        <NavigationItem link='/' exact={true} clicked={props.hideSideDrawer}>Home</NavigationItem>
        <NavigationItem link="/shopping" clicked={props.hideSideDrawer}>Shop</NavigationItem>
        <NavigationItem link="/cart" clicked={props.hideSideDrawer}>
            <WithBadge  showBadge={props.badgeCount > 0} count={props.badgeCount}><FontAwesomeIcon icon='shopping-cart' aria-hidden="true"/></WithBadge>
        </NavigationItem>
    </ul>
);

export default navigationItems;