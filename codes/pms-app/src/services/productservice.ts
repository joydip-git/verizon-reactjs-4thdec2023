import axiosInstance from "../config/axiosconfig";
import { ApiResponse } from "../models/apiresponse";
import { Product } from "../models/product";

export function getProducts() {
    //send an HTTP request to RESTful API server
    return axiosInstance.get<ApiResponse<Product[]>>('products')
}
export function getProduct(id: number) {
    //send an HTTP request to RESTful API server
    return axiosInstance.get<ApiResponse<Product>>(`products/${id}`)
}

export function deleteProduct(id: number) {
    //send an HTTP request to RESTful API server
    return axiosInstance.delete<ApiResponse<Product[]>>(`products/${id}`)
}

export function updateProduct(id: number, p: Product) {
    //send an HTTP request to RESTful API server
    return axiosInstance.put<ApiResponse<Product[]>>(`products/${id}`, p)
}

export function addProduct(p: Product) {
    //send an HTTP request to RESTful API server
    return axiosInstance.put<ApiResponse<Product[]>>(`products`, p)
}