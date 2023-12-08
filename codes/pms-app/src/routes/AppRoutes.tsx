import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import('../components/common/home/Home'))
const ProductList = lazy(() => import('../components/products/product-list/ProductList'));
const AddProduct = lazy(() => import("../components/products/add-product/AddProduct"));

const ProductDetail = lazy(() => import("../components/products/product-detail/ProductDetail"));
const EditProduct = lazy(() => import("../components/products/edit-product/EditProduct"));
const PageNotFound = lazy(() => import("../components/common/page-not-found/PageNotFound"));


const AppRoutes = () => {
    return (
        <Routes>
            <Route path=''>
                <Route path='' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='products'>
                    <Route path='' element={<ProductList />} />
                    <Route path='add' element={<AddProduct />} />
                    <Route path='view/:id' element={<ProductDetail />} />
                    <Route path='edit/:id' element={<EditProduct />} />
                </Route>
                <Route path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes