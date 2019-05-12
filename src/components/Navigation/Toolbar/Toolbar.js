import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import WithBadge from '../../../hoc/withBadge/withBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WithTooltip from '../../../hoc/WithTooltip/WithTooltip';
import './Toolbar.css';

const toolbar = (props) => (
    <header className="toolbar">
    <DrawerToggle clicked={props.toggleSideDrawer}/>
        <nav className='desktop-only'>
            <NavigationItems badgeCount={props.badgeCount} showBadge={props.badgeCount > 0} showTooltip={props.showCartTooltip} clickOnEmptyCart={props.clickOnEmptyCart}/>
        </nav>
        <nav className='sm-only'>
        <ul className='navigationItems'>
            <NavigationItem link='/cart' clicked={props.badgeCount > 0 ? null : (event) => {event.preventDefault(); props.clickOnEmptyCart()}}>
                <WithBadge  showBadge={props.badgeCount > 0} count={props.badgeCount}><WithTooltip showTooltip={props.showCartTooltip} position='down' message='Cart is empty'><FontAwesomeIcon icon='shopping-cart' aria-hidden="true"/></WithTooltip></WithBadge>
            </NavigationItem>
        </ul>
           
        </nav>
    </header>
);

export default toolbar;