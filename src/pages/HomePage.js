import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleLoginStatus } from '../redux/UsersReducer'

function Homepage() {
    const dispatch = useDispatch()
    const changeLoginStatus = () => {
        dispatch(toggleLoginStatus())
    }
    return (
        <div>
            <button onClick={changeLoginStatus} className='btn btn-danger'>Logout</button>
            <h3>Homepage</h3>
        </div>
    )
}

export default Homepage