import React from 'react'
import Header from '../components/Header'
import { products } from '../database/DummyDB'

function Homepage() {
    console.log(products)
    return (
        <div>
            <Header />
            <div className='container'>
                <ul className='row mt-5'>
                    {products.map(item => {
                        return (
                            <li key={item.id} className='col-lg-3 col-md-4 product'>
                                <section>
                                    <img className='img-fluid' src={item.gallery[0]} />
                                    <footer>
                                        <h4>{item.name}</h4>
                                    </footer>
                                </section>
                            </li>
                        )
                    })}
                </ul>
                {/* New Arravials */}
                {/* Featured Categories */}
                {/* Festival Collection */}
                {/* Intagram API Integration */}
            </div>
        </div>
    )
}

export default Homepage