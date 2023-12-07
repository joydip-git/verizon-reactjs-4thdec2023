import { Link, useParams, useNavigate } from "react-router-dom"

type ParamsType = {
    id: string
}
const ProductDetail = () => {
    const navigate = useNavigate()
    const params = useParams<ParamsType>()
    let id = '';
    if (params.id) {
        id = params.id
    }
    return (
        <div>
            {/* <Link to={`/products/edit/${id}`}>
                <button type="button" className="btn btn-primary">Edit</button>
            </Link> */}

            <button
                type="button"
                className="btn btn-primary"
                onClick={
                    () => navigate(`/products/edit/${id}`)
                }>
                Edit
            </button>
        </div>
    )
}

export default ProductDetail