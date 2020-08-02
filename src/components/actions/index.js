import * as Types from '../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product,         //product : product
        quantity        // quantity : quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message
    }
}