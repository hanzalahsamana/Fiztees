"use client";

import { combineReducers } from 'redux';
import cartDataReducer from '../CartData/cartDataSlice';
import productDataReducer from '../Products/productDataSlice';


const rootReducer = combineReducers({
    cartData: cartDataReducer,
    productData: productDataReducer,
});

export default rootReducer;
