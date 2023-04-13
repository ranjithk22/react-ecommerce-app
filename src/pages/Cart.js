import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
function Cart() {
    const { cart } = useSelector(state => state.UsersReducer)
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        setCartItems([...cart])
        console.log(cart, cartItems)
    }, [])
    return (
        <div className='container'>
            <div className='table-responsive cart my-5'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Name</td>
                            <td>Price</td>
                             <td>Size</td>
                            <td>Number of items</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems && cartItems.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td><img src={item.gallery[1]} /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.size}</td>
                                        <td>{item.numberOfProducts}</td>
                                        <td>{item.numberOfProducts * item.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart