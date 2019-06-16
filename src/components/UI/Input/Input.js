import React from 'react';
import './Input.css';
import WithoutRootDiv from '../../../hoc/WithoutRootDiv/WithoutRootDiv';


const input = ( props ) => {
    const inputClasses = ["inputElement" , props.class];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('invalid');
    };

    if(props.touched){
        inputClasses.push('touched');
    };

    let inputElement;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}></textarea>;
            break;
        case ('dropdown'):
            inputElement = (
                <div className="dropdown-container">
                    <ul 
                        className={inputClasses.join(' ')} onClick={(event) => toggleLists(event)}>
                        {props.value}
                        {props.elementConfig.listItems.map((li, i) => (
                            <li key={li+i} className='hidden-li'>{li.value}
                                <ul className="hidden-ul">
                                {li.elementConfig.listItems.map((li, j) => (
                                    <li key={li+j} onClick={(event) => {hideLists(event); props.onSubcetegoryChoosen(event);}}>{li}</li>
                                ))} 
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                );
            break;
            case ( 'select' ):
                    inputElement = (
                        <select
                            disabled={props.disabled}
                            className={inputClasses.join(' ')}
                            onChange={(event) => props.changed(event.target.value)}>
                            {props.elementConfig.options.map((option, i) => (
                                <option key={i} value={option.value} disabled={option.disabled} selected={props.selected}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    );
                break;
            case ('checkbox'):
                inputElement = (
                    <input type="checkbox" className={inputClasses.join(' ')} onChange={props.changed} checked={props.checked}/>
                );
                break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    };

    return (
        props.label ? (
        <div className='input'>
            <label className='label'><span>{props.label}</span>{inputElement}</label>
        </div>
        ) :
        <WithoutRootDiv>{inputElement}</WithoutRootDiv>
    );

};

const toggleLists = (event) => {
    event.target.classList.toggle('show-list');
};

const hideLists = (event) => {
    event.target.parentElement.parentElement.parentElement.classList.remove('show-list');
}

export default input;