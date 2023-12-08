import { Component } from 'react'
import { Product } from '../../../models/product'
//import { productRecords } from '../../../repository/products'
import ProductRow from '../product-row/ProductRow'
import './ProductList.css'
import { getProducts } from '../../../services/productservice'

type ProductListPropType = {}
type ProductListStateType = {
    productlist: Product[] | undefined,
    isRequestComplete: boolean,
    errorMessage: string
}

class ProductList extends Component<ProductListPropType, ProductListStateType> {

    //state initialization
    state: Readonly<ProductListStateType> = {
        productlist: undefined,
        isRequestComplete: false,
        errorMessage: ''
    }

    render() {

        const { productlist, isRequestComplete, errorMessage } = this.state

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

    componentDidMount(): void {
        this.fetchRecords()
    }

    fetchRecords = async () => {
        try {
            const axiosResponse = await getProducts()
            const apiResponse = axiosResponse.data
            if (apiResponse.data !== null) {
                this.setState({
                    productlist: apiResponse.data,
                    errorMessage: '',
                    isRequestComplete: true
                })
            } else {
                this.setState({
                    productlist: undefined,
                    errorMessage: apiResponse.message,
                    isRequestComplete: true
                })
            }
        } catch (err: any) {
            this.setState({
                productlist: undefined,
                errorMessage: err.message,
                isRequestComplete: true
            })
        }

        /*
        getProducts()
            .then(
                (resp) => {
                    const apiResponse = resp.data
                    if (apiResponse.data !== null) {
                        this.setState({
                            productlist: apiResponse.data,
                            errorMessage: '',
                            isRequestComplete: true
                        })
                    } else {
                        this.setState({
                            productlist: undefined,
                            errorMessage: apiResponse.message,
                            isRequestComplete: true
                        })
                    }
                },
                // (err: Error) => {
                //     this.setState({
                //         productlist: undefined,
                //         errorMessage: err.message,
                //         isRequestComplete: true
                //     })
                // }
            )
            .catch(
                (err: Error) => {
                    this.setState({
                        productlist: undefined,
                        errorMessage: err.message,
                        isRequestComplete: true
                    })
                }
            )
            */
    }
}
export default ProductList