
import * as actionTypes from '../constants/product.constant';

export const getProductReducer = ( state ={products : []} , action) =>{
    switch (action.type) {
        
        case actionTypes.GET_PRODUCTS_RWQUESR:
            return{
                loading:true,
                products : []
            }
            

        case actionTypes.GET_PRODUCTS_SUCCESS:
            return{
                loading:false,
                products : action.payload
            }
            

        case actionTypes.GET_PRODUCTS_FALL:
            return{
                loading:false,
                products : action.payload
            }
            
          
    
        default:
            return state;
    }
}