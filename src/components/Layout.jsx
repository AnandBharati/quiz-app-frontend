import React from 'react'
import Topbar from '../components/Topbar'
import './layout.scss'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useSelector } from 'react-redux'

function Layout() {

  const data = useSelector((state) => state.authReducer)
  const qBankData = useSelector((state) => state.qBankReducer)
  const qData = useSelector((state) => state.questionReducer)


  const loader = <div className="loader">
    <span className="spinner"></span>
    <span className="caption">Loading...</span>
  </div>

  return (
    <div className="mainContainer">

      <Topbar />
      <div className="middle">
        {(data.isLoading || qBankData.isLoading || qData.isLoading) && loader}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout