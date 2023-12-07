import { Link } from 'react-router-dom'
import { Product } from '../../../models/product'
import './ProductRow.css'

type ProductRowPropType = {
    productData: Product
}
const ProductRow = (props: Readonly<ProductRowPropType>) => {
    const { productData } = props
    return (
        <tr>
            <td>
                <Link to={`/products/view/${productData.productId}`}>
                    <img
                        className='img-style'
                        src={productData.imageUrl}
                        alt="NA"
                        title={productData.productName}
                    />
                </Link>
            </td>
            <td>
                {productData.productName}
            </td>
            <td>
                {productData.price}
            </td>
            <td>
                {productData.starRating}
            </td>
            <td>
                <button type="button" className='btn btn-danger'>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ProductRow