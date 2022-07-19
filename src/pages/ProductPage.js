import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProductPage() {
    const { id } = useParams()
    const thumbnailRef = useRef()
    const largeImageRef = useRef()
    const [currentProduct, setCurrentProduct] = useState(null)
    const [currentImage, setCurrentImage] = useState(null)
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
    return (
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
                    <h3>{currentProduct && currentProduct.name}</h3>
                </div>

            </div>
        </div>
    )
}

export default ProductPage