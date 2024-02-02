import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const cartPersisitConfig= {
    key: "cart",
    storage,
}


export const rootReducer = combineReducers({
    cart: persistReducer(cartPersisitConfig, cartReducer)
})
