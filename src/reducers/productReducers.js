import { PRODUCT_LIST_REQUEST } from "../constants/productConstants";
import { PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
import { PRODUCT_LIST_FAIL } from "../constants/productConstants";


function productListReducer(state= {product: []}, action){

    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
          return { loading: true };
        case PRODUCT_LIST_SUCCESS: 
          return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
          return { loading: false, error: action.payload };
        default: 
          return state;
    }
}

export { productListReducer };