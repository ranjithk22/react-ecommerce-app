import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.scss';

import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchUsers } from './redux/UsersReducer'
import { fetchProducts } from './redux/UsersReducer'
import { users } from './database/db'
import { products } from './database/db'

import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {
  const dispatch = useDispatch()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const newLoginStatus = useSelector(state => state.UsersReducer.isLoggedIn)

  useEffect(() => {
    dispatch(fetchUsers(users))
    dispatch(fetchProducts(products))
    console.log(users)
  }, [])

  useEffect(() => {
    setIsLoggedIn(newLoginStatus)
  }, [newLoginStatus])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          { isLoggedIn ?
            <>
              <Route path='/*' element={<HomePage />} />
              <Route path='products/:id' element={<ProductPage />} />
            </>
            : 
            <>
              <Route path='/*' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
            </>
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
