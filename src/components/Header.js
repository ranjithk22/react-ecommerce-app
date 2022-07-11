import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoginStatus } from '../redux/UsersReducer'

function Header() {
    const currentUser = useSelector(state => state.UsersReducer.currentUser)
    const dispatch = useDispatch()
    const changeLoginStatus = () => {
        dispatch(toggleLoginStatus())
    }
    return (
        <header className='d-flex'>
            <div>
                <a href="#" className="logo">Glance Collections</a>
            </div>
            <div className='d-flex ms-auto'>
                <ul>
                    <li><a href="#">Home</a></li>
                </ul>
                <ul>
                    <li>
                        <button onClick={changeLoginStatus} className='btn btn-danger'>Logout</button>
                    </li>
                    <li>
                        <h3>Hi {currentUser.username}</h3>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header