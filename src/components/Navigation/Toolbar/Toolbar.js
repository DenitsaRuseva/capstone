import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import WithBadge from '../../../hoc/withBadge/withBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Toolbar.css';

const toolbar = (props) => (
    <header className="toolbar">
    <DrawerToggle clicked={props.toggleSideDrawer}/>
        <nav className='desktop-only'>
            <NavigationItems badgeCount={props.badgeCount}/>
        </nav>
        <div className='navigationItems sm-only'>
            <NavigationItem link="/cart" clicked={props.hideSideDrawer}>
                <WithBadge  showBadge={props.badgeCount > 0} count={props.badgeCount}><FontAwesomeIcon icon='shopping-cart' aria-hidden="true"/></WithBadge>
            </NavigationItem>
        </div>
    </header>
);

export default toolbar;