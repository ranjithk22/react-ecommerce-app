import React, { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { currentUser, toggleLoginStatus, fetchUsers } from '../redux/UsersReducer'

const LoginPage = () => {
    const dbUsers = useSelector(state => state.UsersReducer.users)
    const dispatch = useDispatch()
    const [hideIt, setHideIt] = useState(false)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        dispatch(fetchUsers())
        console.log('Fetch Users')
    }, [])

    const onUsernameChange = (e) => {
        setUser((prevState) => ({ ...prevState, username: e.target.value }))
    }
    const onPasswordChange = (e) => {
        setUser((prevState) => ({ ...prevState, password: e.target.value }))
    }

    const credentialsAlert = () => {
        setTimeout(() => {
            setHideIt(false)
        }, 1000)
    }

    const onFormSumit = (e) => {
        e.preventDefault()
        const newUser = dbUsers.find(item => {
            if (item.username === user.username & item.password === user.password) {
                console.log(item)
                return item
            }
        })

        if (newUser) {
            dispatch(toggleLoginStatus())
            dispatch(currentUser(user))
        } else {
            setHideIt(true)
            credentialsAlert()
        }
    }

    return (
        <div className='login-wrapper d-flex align-items-center justify-content-center'>
            <div className='card p-4'>
                <h3 className='mb-3 text-center'>Login</h3>
                <form onSubmit={onFormSumit}>
                    <div className='mb-2'>
                        <label>Enter Username</label>
                        <input className='form-control mt-2' type="text" value={user.username} onChange={onUsernameChange} />
                    </div>
                    <div className='mb-3'>
                        <label>Password</label>
                        <input className='form-control mt-2' type="text" value={user.password} onChange={onPasswordChange} />
                    </div>
                    <div className='d-flex'>
                        <button type='submit' className='btn btn-primary m-auto'>Login</button>
                    </div>
                    {hideIt &&
                        <div className={`alert alert-danger mt-4 text-center hide-it ${hideIt && 'hide-it'}`} role="alert">
                            Credential are wrong
                        </div>
                    }
                </form>
                <hr />
                <div className='d-flex text-center flex-column'>
                    <p className=''>Don't have account</p>
                    <Link to="/signup" className='btn btn-outlined-primary m-auto'>Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage