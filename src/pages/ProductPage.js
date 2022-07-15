import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrentProduct } from '../redux/UsersReducer'

function ProductPage() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { currentProduct } = useSelector(state => state.UsersReducer)

    useEffect(() => {
        dispatch(fetchCurrentProduct(id))
    }, [id])
    console.log(currentProduct)
    return (
        <div>
            ProductPage:
            {currentProduct[0].name}
            {currentProduct[0].gallery && currentProduct[0].gallery.map((item, index) => {
                return (
                    <img id={index} className='img-fluid' src={item} />
                )
            })}
        </div>
    )
}

export default ProductPage