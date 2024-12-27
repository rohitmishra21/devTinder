import React from 'react'
import NavBar from "./NavBar"
import { Outlet } from 'react-router'
import Fotter from './Fotter'

const Body = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Fotter />
        </div>
    )
}

export default Body
