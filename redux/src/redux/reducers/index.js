// In a project you will have multiple reducers and this is the file that will combine them all.
import {combineReducers} from "redux";
import {productReducer,selectedProductReducer} from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})

export default reducers;
