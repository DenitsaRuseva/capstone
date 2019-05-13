import React, {Component} from 'react';
import Item from './Item/Item';
import './ItemsGallery.css';
import { connect } from 'react-redux';


class ItemsGallery extends Component {
   

    componentWillUnmount(){

    }


    render(){

        console.log('in render items gallery');
        console.log(this.props.productsToShowIds);
        let items;
        if(this.props.productsToShowIds.length < 1){
            items = <div className='items-gallery'>No items to show</div>;
        }
        else {
            items = this.props.productsToShowIds.map((id, i) => {
                return <Item 
                        key={i} 
                        item={this.props.allProducts[id]}
                        clickOnAddBtn={() => this.props.clickOnAddBtn(id*1)}
                        clickOnImg={() => this.props.clickOnImg(id*1)}/>;
            });
        };

        return (
            <div className='items-gallery'>{items}</div>
        );
    };

};

const mapStateToProps = state => {
    return {
        allProducts:  state.allProducts
    };
};

export default connect(mapStateToProps)(ItemsGallery);