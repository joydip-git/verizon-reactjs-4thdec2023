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
                <img
                    className='img-style'
                    src={productData.imageUrl}
                    alt="NA"
                    title={productData.productName}
                />
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