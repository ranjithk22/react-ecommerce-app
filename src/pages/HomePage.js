import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Homepage() {
    const { products } = useSelector(state => state.UsersReducer)

    return (
        <div>
            <div className='container'>
                <ul className='row mt-5 products-list'>
                    {products.map(item => {
                        return (
                            <Link to={`/products/${item.id}`} key={item.id} className='col-lg-3 col-md-4 nobg ' >
                                <section>
                                    <img className='img-fluid' src={item.gallery[0]} />
                                    <footer>
                                        <h4>{item.name}</h4>
                                    </footer>
                                </section>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </div >
    )
}

export default Homepage