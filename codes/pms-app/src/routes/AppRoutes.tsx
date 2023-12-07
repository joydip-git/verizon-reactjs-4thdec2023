import { Routes, Route } from "react-router-dom";
import Home from '../components/common/home/Home';
import ProductList from '../components/products/product-list/ProductList';
import AddProduct from "../components/products/add-product/AddProduct";
import ProductDetail from "../components/products/product-detail/ProductDetail";
import EditProduct from "../components/products/edit-product/EditProduct";
import PageNotFound from "../components/common/page-not-found/PageNotFound";

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