import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./reducers";

const appStore = configureStore({
    reducer: {
        productsState: productListReducer
    },
    devTools: true
})

export type StateMapType = ReturnType<typeof appStore.getState>
export default appStore