import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Products from '../Products';
import Product from '../Product';
import { actAddToCart, actChangeMessage } from '../actions/index';

class ProductsContainer extends Component {
    render(){
        var { products } = this.props;
        return (
            <Products>
                {/* truyen props dang children */}
                {this.showProducts(products)};      
            </Products>
        );
    }
    showProducts(products){
        var { onAddToCart, onChangeMessage } = this.props;
        var result = null;
        if(products.length > 0){
            result = products.map((product,index) => {
                return <Product 
                            key={index} 
                            product={product} 
                            onAddToCart = {onAddToCart}
                            onChangeMessage= {onChangeMessage}
                        />
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            img : PropTypes.string.isRequired,
            description : PropTypes.string,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired,
    onChangMessage : PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        products : state.products                //props la products
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
