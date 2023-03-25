import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { addUser } from '../redux/UsersReducer'
import { useSelector, useDispatch } from 'react-redux'


function SignupPage() {
    const dbUsers = useSelector(state => state.UsersReducer.users)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const confirmPasswordRef = useRef()
    const [user, setUser] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const onUsernameChange = (e) => {
        setUser((prevState) => ({ ...prevState, username: e.target.value }))
        console.log(user)
    }
    const onPasswordChange = (e) => {
        setUser((prevState) => ({ ...prevState, password: e.target.value }))
        console.log(user)
    }
    const onConfirmPasswordChange = (e) => {
        setUser((prevState) => ({ ...prevState, confirmPassword: e.target.value }))
        console.log(user)
        if (user.password === user.confirmPassword) {
            confirmPasswordRef.current.classList.remove('error')
        }
    }
    const checkBothPasswordValues = () => {
        if (user.password !== user.confirmPassword) {
            setUser((prevState) => ({ ...prevState, confirmPassword: '' }))
            confirmPasswordRef.current.classList.add('error')
        } else {
            confirmPasswordRef.current.classList.remove('error')
        }
    }
    const onFormSumit = (e) => {
        e.preventDefault()
        console.log(user)
        dbUsers.forEach(item => {
            if (item.username.stringValue === user.username) {
                alert('User already Exists')
            } else {
                if (user.password !== user.confirmPassword) {
                    setUser((prevState) => ({ ...prevState, confirmPassword: '' }))
                    confirmPasswordRef.current.classList.add('error')
                } else {
                    confirmPasswordRef.current.classList.remove('error')
                    dispatch(addUser(user))
                    navigate('/');
                }
            }
        })
    }


    return (
        <div className='login-wrapper d-flex align-items-center justify-content-center'>
            <div className='card p-4'>
            <h3 className='mb-3 text-center'>Signup</h3>
                <form onSubmit={onFormSumit}>
                    <div className='mb-2'>
                        <label>Enter Username</label>
                        <input className='form-control mt-2' type="text" value={user.username} onChange={onUsernameChange} />
                    </div>
                    <div className='mb-3'>
                        <label>Password</label>
                        <input className='form-control mt-2' type="text" value={user.password} onChange={onPasswordChange} />
                    </div>
                    <div className='mb-3'>
                        <label>Confirm Password</label>
                        <input className='form-control mt-2'type="text" ref={confirmPasswordRef} value={user.confirmPassword} onChange={onConfirmPasswordChange} onBlur={checkBothPasswordValues} />
                    </div>
                    <div className='d-flex'>
                        <button type='submit' className='btn btn-primary m-auto'>Submit</button>
                    </div>
                </form>
                <hr />
                <div className='d-flex text-center flex-column'>
                    <p>Already have account</p>
                    <Link to="/" className='btn btn-outlined-primary m-auto'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default SignupPage