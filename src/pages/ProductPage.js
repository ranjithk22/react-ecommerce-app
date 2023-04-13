import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateCartItem, updateNewProduct, addProductToCart } from '../redux/UsersReducer'

function ProductPage() {

    // Module 1 - Get Product Data
    const navigate = useNavigate()
    const { products } = useSelector(state => state.UsersReducer)
    const { cart } = useSelector(state => state.UsersReducer)

    const { id } = useParams()
    const [currentProduct, setCurrentProduct] = useState(null)
    const dispatch = useDispatch()

    const loadCurrentProduct = () => {
        let tempProducts = products.filter(item => item.id == id)
        let tempProduct = tempProducts[0]
        setCurrentProduct(tempProduct)
        setCurrentImage(tempProduct.gallery[0])
    }
    useEffect(() => {
        loadCurrentProduct()
    }, [products])

    // Module 2 - Image Gallery

    const [currentImage, setCurrentImage] = useState(null)

    const selectImage = (index) => {
        setCurrentImage(currentProduct.gallery[index])
    }

    // Module 3 - add product to cart 

    const sizeRef = useRef()
    const [addProduct, setAddProduct] = useState(null)
    const [noOfProducts, setNoOfProducts] = useState(0)

    // increment no of products
    const incrementProducts = (e) => {
        e.preventDefault()
        if (currentProduct.instock > 0) {
            setCurrentProduct(prevState => ({
                ...prevState,
                instock: prevState.instock - 1
            }))
            setNoOfProducts(prevCounter => prevCounter + 1)
        }
    }

    // decrement no of products
    const decrementProducts = (e) => {
        e.preventDefault()
        if (noOfProducts > 0) {
            setCurrentProduct(prevState => ({
                ...prevState,
                instock: prevState.instock + 1
            }))
            setNoOfProducts(prevCounter => prevCounter - 1)
        }
    }
    const [size, setSize] = useState('')
    const setSelectedSize = (index) => {
        if (currentProduct.size[index].active !== false) {
            setSize(currentProduct.size[index].sizeCode)
        }
    }

    // on addToCart button click
    const addToCart = (e) => {
        e.preventDefault()
        if (noOfProducts > 0 && size !== '' && noOfProducts > 0) {
            setAddProduct({ ...currentProduct, size: size, numberOfProducts: noOfProducts, instock: (currentProduct.instock - 1) })
            console.log(cart)
            cart.forEach(item => {
                if (item.id == Number(id)) {
                    console.log('its Old Item')
                    dispatch(updateCartItem(currentProduct))
                } else {
                    console.log('its New Item')
                    dispatch(addProductToCart({ ...currentProduct, size: size, numberOfProducts: noOfProducts }))
                }
            })
            if (cart.length == 0) {
                dispatch(addProductToCart({ ...currentProduct, size: size, numberOfProducts: noOfProducts }))
            }

            dispatch(updateNewProduct(currentProduct))
            setNoOfProducts(0)
        } else {
            alert('Choose Quantity & size')
        }
    }

    return (
        <>
            <div className='container mt-5 product'>
                <div className='row'>
                    <div className='col-md-6 d-flex'>
                        <div className='thumbnails'>
                            {currentProduct && currentProduct.gallery.map((item, index) => {
                                return (
                                    <img key={index} onClick={() => selectImage(index)} className='img-fluid' src={item} />
                                )
                            })}
                        </div>
                        <div>
                            {currentProduct && (<img className='img-fluid' src={currentImage} />)}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card ms-5 p-3'>
                            {currentProduct && (
                                <form >
                                    <h3 className='mb-3'>{currentProduct.name}</h3>
                                    <p><strong>Price:</strong> {currentProduct.price}</p>
                                    <p><strong>Instock:</strong> {currentProduct.instock}</p>
                                    <div className='sizes d-flex mb-3'>
                                        {currentProduct.size.map((item, index) => {
                                            return (
                                                <div className={item.active ? 'form-check' : 'form-check non-active'} key={index}>
                                                    <input name="flexRadioDefault" ref={sizeRef} id="flexRadioDefault" value={item.sizeCode} type="radio" className="form-check-input" onClick={() => setSelectedSize(index)} />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        {item.sizeCode}
                                                    </label>
                                                </div>

                                            )
                                        })}
                                    </div>
                                    <div className='btn-group mb-3'>
                                        <button onClick={decrementProducts} className='btn btn-light'>-</button>
                                        <button className='btn btn-light'>{noOfProducts}</button>
                                        <button onClick={incrementProducts} className='btn btn-light'>+</button>
                                    </div>
                                    <div>
                                        <button className='btn btn-primary' type='submit' onClick={addToCart}>Add to Cart</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage