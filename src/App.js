import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.scss';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const newLoginStatus = useSelector(state => state.UsersReducer.isLoggedIn)


  useEffect(() => {
    setIsLoggedIn(newLoginStatus)
  }, [newLoginStatus])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signup" element={!isLoggedIn && <SignupPage />} />
          <Route exact path="/" element={isLoggedIn ? <HomePage /> : <LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
