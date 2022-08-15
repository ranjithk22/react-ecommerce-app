import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoginStatus } from '../redux/UsersReducer'
import Dropdown from 'react-bootstrap/Dropdown';


function Header() {
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.UsersReducer.currentUser)
    const dispatch = useDispatch()
    const changeLoginStatus = () => {
        dispatch(toggleLoginStatus())
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
                                {currentUser.username}
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