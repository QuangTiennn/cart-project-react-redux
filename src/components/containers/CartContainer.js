import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as Message from '../constants/Message';
import CartItem from '../CartItem';
import Cart from '../Cart';
import CartResult from './../CartResult';
import * as actions from '../actions/index';

class CartContainer extends Component {
    render(){
        var { cart } = this.props;
        return(
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }
    showCartItem = (cart) => {
        var { onDeleteProductInCart } = this.props;
        var result = <tr>
                        <td>
                            {Message.MSG_CART_EMPTY}
                        </td>
                    </tr>;
        if(cart.length >0 ){
            result = cart.map((item,index) => {
                return (
                    <CartItem 
                        key={index}
                        item={item}            //item la sp va soluong mua  
                        index={index}
                        onDeleteProductInCart = {onDeleteProductInCart}
                    />
                );
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart={cart}/>
        }
        return result;
    }
}


CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            img : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            description : PropTypes.string.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        }).isRequired,
        quantity : PropTypes.number.isRequired,
    })).isRequired
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart                      //props la cart => cac sp trong gio hang
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart : (product) => {                    //props tham so la product
            dispatch(actions.actDeleteProductInCart(product))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);