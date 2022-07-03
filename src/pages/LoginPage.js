import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { currentUser, toggleLoginStatus, fetchUsers } from '../redux/UsersReducer'

function LoginPage() {
    const dbUsers = useSelector(state => state.UsersReducer.users)
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const onUsernameChange = (e) => {
        setUser(preveState => ({ ...preveState, username: e.target.value }))
        console.log(user)
    }
    const onPasswordChange = (e) => {
        setUser(preveState => ({ ...preveState, password: e.target.value }))
        console.log(user)
    }
    const onFormSumit = (e) => {
        e.preventDefault()
        dbUsers.forEach(item => {
            if (item.username.stringValue === user.username && item.password.stringValue === user.password) {
                alert('User Exists')
                dispatch(toggleLoginStatus())
                dispatch(currentUser(user))
            }
        })
    }
    return (
        <div className='container'>
            <h3>Login</h3>
            <form onSubmit={onFormSumit}>
                <label>Enter Username</label>
                <input type="text" value={user.username} onChange={onUsernameChange} />
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