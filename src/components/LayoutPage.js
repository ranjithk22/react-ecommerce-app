import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function LayoutPage() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default LayoutPage