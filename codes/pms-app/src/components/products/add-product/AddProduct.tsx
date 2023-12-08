import { createRef, useRef, useState } from 'react'
import './AddProduct.css'
import { Product } from '../../../models/product'
import { addProduct } from '../../../services/productservice'
import { useNavigate } from 'react-router-dom'
//import { useForm } from '../../../hooks/useForm'

const AddProduct = () => {

    const [idValidationError, setIdValidationError] = useState<string>('')
    const [nameValidationError, setNameValidationError] = useState<string>('')

    //const [formState, setFormState] = useForm()
    const navigateFn = useNavigate()
    //const idInputRef = createRef<HTMLInputElement>()
    const idInputRef = useRef<HTMLInputElement>(null)
    const nameInputRef = useRef<HTMLInputElement>(null)

    const [productState, setProductState] = useState<Product>({
        productId: 0,
        productName: '',
        productCode: '',
        price: 0,
        description: '',
        starRating: 0,
        imageUrl: '',
        releaseDate: ''
    })

    const updateProductState =
        (propName: string, propValue: number | string) => {
            setProductState(
                (current) => {
                    return {
                        ...current,
                        [propName]: propValue
                    }
                }
            )
        }

    const validate = () => {
        console.log('here')
        if (idInputRef.current) {
            //idInputRef.current.focus()
            if (idInputRef.current.value === '' || idInputRef.current.value ===
                '0') {
                setIdValidationError('id should be entered/id value should be greater than zero')
            } else {
                setIdValidationError('')
            }
        }

        if (nameInputRef.current?.value === '') {
            setNameValidationError('name should be entered')
        } else {
            setNameValidationError('')
        }

    }

    const submitData = async () => {
        console.log(productState)
        //create a product object based on input data
        //productState
        //send HTTP request using service method addProduct() by passing the product object to the addProduct() method

        if (productState.productId !== 0) {
            if (window.confirm('You want to add the record?')) {
                try {
                    const axiosResponse = await addProduct(productState)
                    const apiResponse = axiosResponse.data
                    if (apiResponse.data !== null) {
                        window.alert(apiResponse.message)
                        navigateFn('/products')
                    } else {
                        window.alert(apiResponse.message)
                    }
                } catch (error: any) {
                    window.alert(error.message)
                }
            }
        }
    }
    return (
        <form>
            <fieldset>
                <legend>ENTER PRODUCT DETAILS:</legend>

                {/* id */}
                <div className="form-group">
                    <label htmlFor="txtId" className="form-label mt-4">Id:&nbsp;</label>
                    <input ref={idInputRef} type="text" id="txtId" className="form-control" value={productState.productId} name='productId' onBlur={validate} onChange={
                        (e) => {
                            const id = e.target.value
                            if (id !== '') {
                                updateProductState(e.target.name, Number(id))
                            } else {
                                setIdValidationError('id should be entered/id value should be greater than zero')
                            }
                        }
                    } />
                    &nbsp;
                    {idValidationError !== '' && <span>{idValidationError}</span>}
                </div>

                {/* name */}
                <div className="form-group">
                    <label htmlFor="txtName" className="form-label mt-4">Name:&nbsp;</label>
                    <input ref={nameInputRef} type="text" id="txtName" className="form-control" value={productState.productName} name='productName' onChange={
                        (e) => {
                            updateProductState(e.target.name, e.target.value)
                            validate()
                        }
                    } />
                </div>
                &nbsp;
                {nameValidationError !== '' && <span>{nameValidationError}</span>}

                {/* code */}
                <div className="form-group">
                    <label htmlFor="txtCode" className="form-label mt-4">Code:&nbsp;</label>
                    <input type="text" id="txtCode" className="form-control" value={productState.productCode} name='productCode' onChange={
                        (e) => updateProductState(e.target.name, e.target.value)
                    } />
                </div>

                {/* description */}
                <div className="form-group">
                    <label htmlFor="txtDesc" className="form-label mt-4">Description:&nbsp;</label>
                    <textarea id="txtDesc" cols={30} rows={10} className="form-control" value={productState.description} name='description' onChange={
                        (e) => updateProductState(e.target.name, e.target.value)
                    }></textarea>
                </div>

                {/* date */}
                <div className="form-group">
                    <label htmlFor="txtDate" className="form-label mt-4">Release Date:&nbsp;</label>
                    <input type="date" id="txtDate" className="form-control" value={productState.releaseDate} name='releaseDate' onChange={
                        (e) => updateProductState(e.target.name, e.target.value)
                    } />
                </div>

                {/* price */}
                <div className="form-group">
                    <label htmlFor="txtPrice" className="form-label mt-4">Price:&nbsp;</label>
                    <input type="text" id="txtPrice" className="form-control" value={productState.price} name='price' onChange={
                        (e) => {
                            const price = e.target.value
                            if (price !== '')
                                updateProductState(e.target.name, Number(price))
                        }
                    } />
                </div>

                {/* rating */}
                <div className="form-group">
                    <label htmlFor="txtRating" className="form-label mt-4">Rating:&nbsp;</label>
                    <input type="text" id="txtRating" className="form-control" value={productState.starRating} name='starRating' onChange={
                        (e) => {
                            const rating = e.target.value
                            if (rating !== '')
                                updateProductState(e.target.name, Number(rating))
                        }
                    } />
                </div>

                {/* image url */}
                <div className="form-group">
                    <label htmlFor="txtUrl" className="form-label mt-4">Image Url:&nbsp;</label>
                    <input type="text" id="txtUrl" className="form-control" value={productState.imageUrl} name='imageUrl' onChange={
                        (e) => updateProductState(e.target.name, e.target.value)
                    } />
                </div>
                <br />
                <div className='center-style'>
                    <button type="button" className="btn btn-primary" onClick={submitData}>Add</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger">Cancel</button>
                </div>
            </fieldset>
        </form>
    )
}

export default AddProduct