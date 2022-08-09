import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../components/Header'

function ProductPage() {
    const { id } = useParams()
    const sizeRef = useRef()
    const [currentProduct, setCurrentProduct] = useState(null)
    const [currentImage, setCurrentImage] = useState(null)
    const [currentSize, setCurrentSize] = useState(null)
    const { products } = useSelector(state => state.UsersReducer)

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

    const selectImage = (index) => {
        console.log(index)
        setCurrentImage(currentProduct.gallery[index])
    }
    const addToCart = (e) => {
        e.preventDefault()
        console.log(currentSize)
        console.log(currentProduct)
    }
    const changeCurrentSize = () => {
        setCurrentProduct(prevState => ({ ...prevState, size: sizeRef.current.value }))
        console.log(currentProduct)
    }
    // useEffect(() => {
    //     setCurrentProduct({ ...currentProduct, ...currentSize })
    // },[currentSize])
    return (
        <>
        <Header />
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
                                <select className='form-select mb-2' ref={sizeRef} onChange={changeCurrentSize}>
                                    {currentProduct.size.map((item, index) => {
                                        return (    
                                        <option key={index} value={item}>{item}</option>
                                    )})}
                                </select>
                                <button className='btn btn-primary' type='submit'>Add to Cart</button>
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