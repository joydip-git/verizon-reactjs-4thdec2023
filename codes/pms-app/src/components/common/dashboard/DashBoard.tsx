import { Link } from "react-router-dom";

const DashBoard = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="navbar-brand">PRODUCT MANAGEMENT SYSTEM</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/home">Home
                                <span className="visually-hidden">
                                    (current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/products">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/products/add">
                                Add Product
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default DashBoard
