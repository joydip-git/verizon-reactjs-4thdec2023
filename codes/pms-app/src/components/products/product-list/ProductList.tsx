import ProductRow from '../product-row/ProductRow'
import './ProductList.css'
import { getProducts } from '../../../services/productservice'
import { useSelector, useDispatch } from "react-redux";
import { StateMapType } from '../../../redux/store';
import { fetchFailure, fetchSuccess, initiateFetch } from '../../../redux/reducers';
import { useEffect } from 'react';

type ProductListPropType = {}
const ProductList = (props: Readonly<ProductListPropType>) => {

    const { productlist, isRequestComplete, errorMessage } = useSelector(
        (stateMap: StateMapType) => {
            return stateMap.productsState
        }
    )

    const dispatchFn = useDispatch()

    const fetchRecords = async () => {
        //disatching initiate request
        dispatchFn(initiateFetch())
        try {
            const axiosResponse = await getProducts()
            const apiResponse = axiosResponse.data
            if (apiResponse.data !== null) {
                //disatching success request
                dispatchFn(fetchSuccess(apiResponse.data))
            } else {
                //disatching failure request
                dispatchFn(fetchFailure(apiResponse.message))
            }
        } catch (err: any) {
            //disatching failure request
            dispatchFn(fetchFailure(err.message))
        }
    }

    useEffect(
        () => {
            fetchRecords()
        },
        []
    )
    let design: any;
    if (!isRequestComplete) {
        design = <span>Loading...please wait</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (!productlist) {
        design = <span>no record found</span>
    } else {
        design = (
            <div className='container container-fluid'>
                <h2 className='text-muted'>
                    List of {productlist.length} Products:
                </h2>
                <br />
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='table-primary'>
                        {
                            productlist.map(
                                (p) => <ProductRow key={p.productId} productData={p} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    return design
}
export default ProductList