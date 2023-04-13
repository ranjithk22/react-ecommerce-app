import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.scss';

import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { fetchProducts } from './redux/UsersReducer'
import { products } from './database/db'

import { UseAuth } from './auth/AuthProvider'
import SignupPage from './pages/SignupPage2'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import LayoutPage from './components/LayoutPage';
import { useDispatch } from 'react-redux';
import Cart from './pages/Cart';

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const auth = UseAuth()
  const dispatch = useDispatch()

  // Get Login status for Local Storage
  let currentStatus = JSON.parse(localStorage.getItem('loginStatus'))

  // App On First Load 
  useEffect(() => {
    if (!currentStatus) {
      localStorage.setItem('loginUser', JSON.stringify(''))
      localStorage.setItem('loginStatus', JSON.stringify(false))
    } else {
      auth.logIn(JSON.parse(localStorage.getItem('loginUser')))
    }

  }, [])



  // Set user on Login & add products from database to redux
  useEffect(() => {
    if (currentStatus) {
      setIsLogged(true)
      dispatch(fetchProducts(products))

      setTimeout(() => {
        localStorage.setItem('loginUser', JSON.stringify(''))
        localStorage.setItem('loginStatus', JSON.stringify(false))
        auth.logOut()
      }, 86400000)

    } else {
      setIsLogged(false)
    }
    console.log(currentStatus)
  }, [currentStatus])

  return (
    <BrowserRouter >
      <div className="App">
        <Routes>
          {isLogged ?
            <Route element={<LayoutPage />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='products/:id' element={<ProductPage />} />
            </Route>
            :
            <>
              <Route path='/*' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
            </>
          }
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
