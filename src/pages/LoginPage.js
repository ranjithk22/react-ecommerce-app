import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toggleLoginStatus } from '../redux/UsersReducer'

function LoginPage() {
    const { users } = useSelector(state => state.UsersReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const onUsernameChange = (e) => {
        setUser(preveState => ({ ...preveState, username: e.target.value }))
        console.log(user)
    }
    const checkUsername = () => {
        users.find(item => {
            if (item.username !== user.username) {
                alert('Username enter doest exist in database')
            }
        })
    }
    const onPasswordChange = (e) => {
        checkUsername()
        setUser(preveState => ({ ...preveState, password: e.target.value }))
        console.log(user)
    }
    const onFormSumit = (e) => {
        e.preventDefault()
        users.find(item => {
            if (item.username === user.username && item.password === user.password) {
                alert('Login')
                dispatch(toggleLoginStatus())
            } else {
                alert(`Username & Password doesn't match`)
            }
        })
    }
    return (
        <div className='container'>
            <h3>Login</h3>
            <form onSubmit={onFormSumit}>
                <label>Enter Username</label>
                <input type="text" value={user.username} onChange={onUsernameChange} onBlur={checkUsername} />
                <label>Enter Password</label>
                <input type="text" value={user.password} onChange={onPasswordChange} />
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
            <hr />
            <Link to="/signup" className='btn btn-primary'>Signup</Link>
        </div>
    )
}

export default LoginPage