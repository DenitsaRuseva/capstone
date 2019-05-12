import React from 'react';
import './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className="backdrop" onClick={props.clicked}>{props.children}</div> : <div className="backdrop hidden" onClick={props.clicked}>{props.children}</div>
);

export default backdrop;