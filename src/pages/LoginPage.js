import React, { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { currentUser, toggleLoginStatus, fetchUsers } from '../redux/UsersReducer'

const LoginPage = () => {
    const dbUsers = useSelector(state => state.UsersReducer.users)
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const onUsernameChange = (e) => {
        setUser((prevState) => ({ ...prevState, username: e.target.value }))
    }
    const onPasswordChange = (e) => {
        setUser((prevState) => ({ ...prevState, password: e.target.value }))
    }

    const onFormSumit = (e) => {
        e.preventDefault()
        const newUser = dbUsers.find(item => item.username === user.username)
        if (newUser) {
            alert("User Exists")
            dispatch(toggleLoginStatus())
            dispatch(currentUser(user))
        } else {
            alert("User Doesn't Exists")
        }
    }

    return (
        <div className='container'>
            <h3>Login</h3>
            <form onSubmit={onFormSumit}>
                <label>Enter Username</label>
                <input type="text" value={user.username} onChange={onUsernameChange} />
                <label>Password</label>
                <input type="text" value={user.password} onChange={onPasswordChange} />
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
            <hr />
            <Link to="/signup" className='btn btn-primary'>Signup</Link>
        </div>
    )
}

export default LoginPage