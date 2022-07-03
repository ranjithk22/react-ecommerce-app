import React, { useEffect } from 'react'
import { fetchCustomers } from '../../redux/CustomersReducer'
import { useSelector, useDispatch } from 'react-redux'

function CustomersList() {

    const { customers, loading, error } = useSelector((state) => state.CustomersReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCustomers());
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>There is an error</p>

    return (
        <div className='table-responsive'>
            <h4 className='mb-2'>CustomersList</h4>
            <table className='table table-bordered table-light'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers && customers.map((item, index) => {
                            return (
                                <tr className='customers' key={item.id}>
                                    <td><img className='img-fluid' src={item.picture.thumbnail} /></td>
                                    <td>{item.name.first} {item.name.last}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.location.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CustomersList