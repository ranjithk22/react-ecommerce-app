import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../components/Header'

function Homepage() {
    const { products } = useSelector(state => state.UsersReducer)

    return (
        <div>
            <Header />
            <div className='container'>
                <ul className='row mt-5'>
                    {products.map(item => {
                        return (
                            <Link to={`/products/${item.id}`} key={item.id} className='col-lg-3 col-md-4 nobg' >
                                <section className='product'>
                                    <img className='img-fluid' src={item.gallery[0]} />
                                    <footer>
                                        <h4>{item.name}</h4>
                                    </footer>
                                </section>
                            </Link>
                        )
                    })}
                </ul>
                {/* New Arravials */}
                {/* Featured Categories */}
                {/* Festival Collection */}
                {/* Intagram API Integration */}
            </div>
        </div >
    )
}

export default Homepage