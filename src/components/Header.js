import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoginStatus } from '../redux/UsersReducer'
import { UseAuth } from '../auth/AuthProvider'
import Dropdown from 'react-bootstrap/Dropdown';


function Header() {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const auth = UseAuth()

    useEffect(() => {
        setUser(auth.user)
    }, [])

    const changeLoginStatus = () => {
        auth.logOut()
        navigate('/');
    }
    return (
        <header className='d-flex align-items-center'>
            <div>
                <Link className="logo" to='/'>Glance Collections</Link>
            </div>
            <div className='d-flex ms-auto'>
                <ul className='d-flex align-items-center'>
                    <li><a className='nav-link' href="#">Home</a></li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='btn btn-primary'>
                                {user.username}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>View Profile</Dropdown.Item>
                                <Dropdown.Item onClick={changeLoginStatus}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>

            </div>
        </header>
    )
}

export default Header