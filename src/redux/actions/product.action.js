import * as actionTypes from '../constants/product.constant.js';

import axios from 'axios';

export const getProducts = () => async(dispatch) => {

    try {
        dispatch({type:actionTypes.GET_PRODUCTS_RWQUESR});

        const {data} = await axios.get('https://fakestoreapi.com/products');

        dispatch({
            type : actionTypes.GET_PRODUCTS_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FALL,
            payload: "Errorr ............."
            // error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}