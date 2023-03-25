import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../components/Header'

function ProductPage() {

    // Module 1 - Get Product Data

    const { products } = useSelector(state => state.UsersReducer)
    const { id } = useParams()
    const [currentProduct, setCurrentProduct] = useState(null)

    const loadCurrentProduct = () => {
        let tempProducts = products.filter(item => item.id == id)
        let tempProduct = tempProducts[0]
        console.log(tempProduct)
        setCurrentProduct(tempProduct)
        setCurrentImage(tempProduct.gallery[0])
        console.log(tempProduct.gallery[0])
    }
    useEffect(() => {
        loadCurrentProduct()
    }, [products])

    ///////////////////////////

    // Module 2 - Image Gallery

    const [currentImage, setCurrentImage] = useState(null)

    const selectImage = (index) => {
        console.log(index)
        setCurrentImage(currentProduct.gallery[index])
    }

    ///////////////////////////

    // Module 3 - add product to cart 

    const sizeRef = useRef()
    const [addProduct, setAddProduct] = useState(null)
    const [noOfProducts, setNoOfProducts] = useState(0)
    console.log('no of products', noOfProducts)

    // increment no of products
    const incrementProducts = () => {
        if (currentProduct.instock > 0) {
            setCurrentProduct(prevState => ({
                ...prevState,
                instock: prevState.instock - 1
            }))
            setNoOfProducts(prevCounter => prevCounter + 1)
        }
    }

    // decrement no of products
    const decrementProducts = () => {
        if (noOfProducts > 0) {
            setCurrentProduct(prevState => ({
                ...prevState,
                instock: prevState.instock + 1
            }))
            setNoOfProducts(prevCounter => prevCounter - 1)
        }
    }

    // on addToCart button click
    const addToCart = (e) => {
        e.preventDefault()
        if (noOfProducts > 0) {
            setAddProduct({ ...currentProduct, size: sizeRef.current.value, numberOfProducts: noOfProducts, instock: (currentProduct.instock - 1) })
            setCurrentProduct({ ...currentProduct, instock: (currentProduct.instock - 1) })
        }
        console.log(currentProduct)
        console.log(addProduct)
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
                                <form onSubmit={addToCart}>
                                    <h3 className='mb-3'>{currentProduct.name}</h3>
                                    <p><strong>Price:</strong> {currentProduct.price}</p>
                                    <p><strong>Instock:</strong> {currentProduct.instock}</p>
                                    <select className='form-select mb-3'>
                                        {currentProduct.size.map((item, index) => {
                                            return (
                                                <option key={index} ref={sizeRef} value={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                                    <div className='btn-group mb-3'>
                                        <button onClick={decrementProducts} className='btn btn-light'>-</button>
                                        <button className='btn btn-light'>{noOfProducts}</button>
                                        <button onClick={incrementProducts} className='btn btn-light'>+</button>
                                    </div>
                                    <div>
                                        <button className='btn btn-primary' type='submit'>Add to Cart</button>
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