import React, {Component} from 'react';
import Badge from './Badge/Badge';
import './withBadge.css';


class WithBadge extends Component{
    
    state = {
        anime: false
    }

    // componentDidMount(){
    //     this.setState(prevState => ({anime: !prevState.anime}));
    //     setTimeout(() => {
    //         this.setState(prevState => ({anime: !prevState.anime}));
    //     }, 1000);
    // };



    componentWillReceiveProps(nextProps){
        if(nextProps.showBadge === true && nextProps.count !== this.props.count){
            this.setState(prevState => ({anime: !prevState.anime}));
        setTimeout(() => {
            this.setState(prevState => ({anime: !prevState.anime}));
        }, 1000);
    };
    };

    render(){
        console.log(this.props.showBadge);
        const attachedClasses = this.state.anime ? 'badge-container show-badge' : 'badge-container'
        return (
           <div className={attachedClasses}>
            {this.props.children}
            {this.props.showBadge ? <Badge count={this.props.count}/> : null} 
        </div>  
        );
    }
};

export default WithBadge;
