import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProductPage() {
    const { id } = useParams()
    const imageRef = useRef()
    const [currentProduct, setCurrentProduct] = useState(null)
    const [currentImage, setCurrentImage] = useState(0)
    const { products } = useSelector(state => state.UsersReducer)

    const loadCurrentProduct = () => {
        let tempProducts = products.filter(item => item.id == id)
        let tempProduct = tempProducts[0]
        console.log(tempProduct)
        setCurrentProduct(tempProduct)
    }
    useEffect(() => {
        loadCurrentProduct()
    }, [products])

    const selectImage = (index) => {
        setCurrentImage(index)
        console.log(index)
        console.log(currentImage)
    }
    return (
        <div className='container mt-5 product'>
            ProductPage:
            <div className='row'>
                <div className='col-md-7 d-flex'>
                    <div className='thumbnails'>
                        {currentProduct && currentProduct.gallery.map((item, index) => {
                            return (
                                <div key={index} title={index} onClick={e => selectImage(e.target.title)} ref={imageRef}>
                                    <img className='img-fluid' src={item} />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {currentProduct && (<img className='img-fluid' src={currentProduct.gallery[currentImage]} />)}
                    </div>
                </div>
                <div className='col-md-5'>
                    {currentProduct && currentProduct.name}
                </div>

            </div>
        </div>
    )
}

export default ProductPage