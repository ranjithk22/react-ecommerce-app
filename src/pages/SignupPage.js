import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { addUser } from '../redux/UsersReducer'
import { useDispatch } from 'react-redux'

function SignupPage() {
    const confirmPasswordRef = useRef()
    const navigate = useNavigate()
    const dispath = useDispatch()
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
        if (user.password !== user.confirmPassword) {
            setUser((prevState) => ({ ...prevState, confirmPassword: '' }))
            confirmPasswordRef.current.classList.add('error')
        } else {
            confirmPasswordRef.current.classList.remove('error')
            dispath(addUser(user))
            navigate('/');
        }
    }

    return (
        <div className='container'>
            <h3>Signup</h3>
            <form onSubmit={onFormSumit}>
                <label>Username</label>
                <input type="text" value={user.username} onChange={onUsernameChange} />
                <label>Password</label>
                <input type="text" value={user.password} onChange={onPasswordChange} />
                <label>Confirm Password</label>
                <input type="text" ref={confirmPasswordRef} value={user.confirmPassword} onChange={onConfirmPasswordChange} onBlur={checkBothPasswordValues} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignupPage