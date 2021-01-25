import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

const listProduct = () =>  async (dispatch) => {  //this function is calling a new function
try {
    dispatch( {type:PRODUCT_LIST_REQUEST}); // change type, that its in process
    const { data } = await axios.get("/api/products");
    dispatch ({ type:PRODUCT_LIST_SUCCESS, payload: data});
}
catch(error) {
    dispatch ({ type:PRODUCT_LIST_FAIL, payload:error.message});
}
}

export { listProduct }