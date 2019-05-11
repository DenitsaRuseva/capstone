import React, {PureComponent} from 'react';
import Spinner from '../Spinner/Spinner';


class NotFound extends PureComponent{
    componentDidMount(){
        this.props.history.replace('/');
    };

    render(){
        return <Spinner/>
    };
};

export default NotFound;