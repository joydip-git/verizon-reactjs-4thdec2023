import { Product } from "../models/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ProductListStateType {
    productlist: Product[] | undefined,
    isRequestComplete: boolean,
    errorMessage: string
}

const initialProductListState: ProductListStateType = {
    productlist: undefined,
    isRequestComplete: false,
    errorMessage: ''
}

const productListSlice = createSlice({
    name: 'productrecords',
    initialState: initialProductListState,
    reducers: {
        initiateFetch: (state) => {
            state.errorMessage = ''
            state.isRequestComplete = false
            state.productlist = undefined
        },
        fetchSuccess: (state, action: PayloadAction<Product[]>) => {
            state.errorMessage = ''
            state.productlist = action.payload
            state.isRequestComplete = true
        },
        fetchFailure: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload
            state.productlist = undefined
            state.isRequestComplete = true
        }
    }
})


const productListReducer = productListSlice.reducer
export default productListReducer

export const { initiateFetch, fetchFailure, fetchSuccess } = productListSlice.actions

// {type: 'productrecords/initiateFetch' }
//{ type: 'productrecords/fetchSuccess', payload:[] }
//{ type: 'productrecords/fetchFailure', payload:'' }