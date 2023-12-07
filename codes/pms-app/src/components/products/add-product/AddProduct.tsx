import './AddProduct.css'
const AddProduct = () => {
    return (
        <form>
            <fieldset>
                <legend>ENTER PRODUCT DETAILS:</legend>

                {/* id */}
                <div className="form-group">
                    <label htmlFor="txtId" className="form-label mt-4">Id:&nbsp;</label>
                    <input type="text" id="txtId" className="form-control" />
                </div>

                {/* name */}
                <div className="form-group">
                    <label htmlFor="txtName" className="form-label mt-4">Name:&nbsp;</label>
                    <input type="text" id="txtName" className="form-control" />
                </div>

                {/* code */}
                <div className="form-group">
                    <label htmlFor="txtCode" className="form-label mt-4">Code:&nbsp;</label>
                    <input type="text" id="txtCode" className="form-control" />
                </div>

                {/* description */}
                <div className="form-group">
                    <label htmlFor="txtDesc" className="form-label mt-4">Description:&nbsp;</label>
                    <textarea id="txtDesc" cols={30} rows={10} className="form-control"></textarea>
                </div>

                {/* date */}
                <div className="form-group">
                    <label htmlFor="txtDate" className="form-label mt-4">Release Date:&nbsp;</label>
                    <input type="date" id="txtDate" className="form-control" />
                </div>

                {/* price */}
                <div className="form-group">
                    <label htmlFor="txtPrice" className="form-label mt-4">Price:&nbsp;</label>
                    <input type="text" id="txtPrice" className="form-control" />
                </div>

                {/* rating */}
                <div className="form-group">
                    <label htmlFor="txtRating" className="form-label mt-4">Rating:&nbsp;</label>
                    <input type="text" id="txtRating" className="form-control" />

                </div>

                {/* image url */}
                <div className="form-group">
                    <label htmlFor="txtUrl" className="form-label mt-4">Image Url:&nbsp;</label>
                    <input type="text" id="txtUrl" className="form-control" />
                </div>
                <br />
                <div className='center-style'>
                    <button type="button" className="btn btn-primary">Add</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger">Cancel</button>
                </div>
            </fieldset>
        </form>
    )
}

export default AddProduct