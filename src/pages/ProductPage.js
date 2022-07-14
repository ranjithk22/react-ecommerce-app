import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProductPage() {
    const { id } = useParams()
    const { products } = useSelector(state => state.UsersReducer)
    const [currentProduct, setCurrentProduct] = useState(null)

    useEffect(() => {
        console.log(id)
        const product = products.find(product => product.id === id)
        // setCurrentProduct(product)
        console.log(product)
    }, [])

    return (
        <div>
            ProductPage: {currentProduct}
            {/* {currentProduct.gallery.map((item, index) => {
                return (
                    <img id={index} className='img-fluid' src={item} />
                )
            })} */}
        </div>
    )
}

export default ProductPage