import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoginStatus } from '../redux/UsersReducer'

function Homepage() {
    const currentUser = useSelector(state => state.UsersReducer.currentUser)
    const dispatch = useDispatch()
    const changeLoginStatus = () => {
        dispatch(toggleLoginStatus())
    }
    return (
        <div>
            <h3>Hi {currentUser.username}</h3>
            <button onClick={changeLoginStatus} className='btn btn-danger'>Logout</button>
            <h3>Homepage</h3>
        </div>
    )
}

export default Homepage