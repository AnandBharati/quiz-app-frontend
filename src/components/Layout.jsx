import React from 'react'
import Topbar from '../components/Topbar'
import './layout.scss'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div className="mainContainer">
      
      <Topbar />
      <div className="middle">
        <Outlet/>
      </div>
        <Footer/>
    </div>
  )
}

export default Layout