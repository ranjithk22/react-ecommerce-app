import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import ProductPage from './ProductPage'
import ProductsListPage from './ProductsListPage'

function Homepage() {

    return (
        <div>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<ProductsListPage />} />
                    <Route path='/products/:id' element={<ProductPage />} />
                </Routes>
                {/* New Arravials */}
                {/* Featured Categories */}
                {/* Festival Collection */}
                {/* Intagram API Integration */}
            </div>
        </div >
    )
}

export default Homepage