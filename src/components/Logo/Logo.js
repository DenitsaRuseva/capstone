import React from 'react';
import './Logo.css';


const logo = (props) => (
    <div className={['logo-container', props.class].join(' ')}>
        <span className="logo-ring">WW</span>
        <span className='logo-text-container'>
                <span className='logo-text'>
                <span className='t up'>T</span>
                <span className='t'>T</span>
                <span className='two'>R`s</span>
                {/* <span className='tree'>A</span>
                <span className='four'>D</span>
                <span className='five'>E</span>
                <span className='six'>R</span>
                <span className='seven'>S</span> */}
            </span>
        </span>
    </div>
);

export default logo;