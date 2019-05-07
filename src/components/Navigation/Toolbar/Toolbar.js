import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import './Toolbar.css';

const toolbar = (props) => (
    <header className="toolbar">
    <DrawerToggle clicked={props.toggleSideDrawer}/>
        <nav className='desktop-only'>
            <NavigationItems badgeCount={props.badgeCount}/>
        </nav>
    </header>
);

export default toolbar;