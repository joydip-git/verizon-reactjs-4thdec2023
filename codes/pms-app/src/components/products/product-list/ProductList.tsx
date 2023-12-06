import { Component } from 'react'
import { Product } from '../../../models/product'
import { productRecords } from '../../../repository/products'
import ProductRow from '../product-row/ProductRow'
import './ProductList.css'

type ProductListPropType = {}
type ProductListStateType = {
    productlist: Product[]
}
class ProductList extends Component<ProductListPropType, ProductListStateType> {

    //state initialization
    state: Readonly<ProductListStateType> = {
        productlist: productRecords
    }

    render() {
        const { productlist } = this.state
        return (
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
}
export default ProductList