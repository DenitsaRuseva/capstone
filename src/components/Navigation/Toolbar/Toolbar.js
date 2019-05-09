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
            <NavigationItems badgeCount={props.badgeCount}/>
        </nav>
        {props.badgeCount > 0 ? (
         <div className='navigationItems sm-only'>
            <NavigationItem link="/cart">
                <WithBadge  showBadge={props.badgeCount > 0} count={props.badgeCount}><FontAwesomeIcon icon='shopping-cart' aria-hidden="true"/></WithBadge>
            </NavigationItem>
        </div>   
        ) : (
            <div className='navigationItems empty-cart sm-only'>
            <NavigationItem>
               <WithTooltip showTooltip={true} position='down' message='Cart is empty'><FontAwesomeIcon icon='shopping-cart' aria-hidden="true"/></WithTooltip> 
            </NavigationItem>
        </div>   
        )}
        
    </header>
);

export default toolbar;