import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { doLogin, logout } from '../util/authSlice'
import Navbar from './Navbar'
import './topbar.scss'



function Topbar() {
  const data = useSelector((state) => state.authReducer)
  const [userInfo, setUserInfo] = useState(data);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const imgSrc = 'https://images.pexels.com/photos/889511/pexels-photo-889511.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'

  //for checking and setting user login status to topbar
  useEffect(() => {
    setUserInfo(data);
  }, [data.isloggedIn])

  //restore login information from localstorage
  useEffect(() => {
    const username = localStorage.getItem('username');
    const isloggedIn = localStorage.getItem('isloggedIn');
    setUserInfo({ username, isloggedIn }); // setting state
    dispatch(doLogin({ username: username, isloggedIn }))
  }, [])

  // function clickHandler() {
  //   //logout handling
  //   dispatch(logout());
  //   navigate('/login')
  // }

  return (
    <div className='topbar'>
      <div className="logo">Quiziee</div>
      <Navbar />
      <div className="login-detail">
        {
          (userInfo.isloggedIn && userInfo.username !== '') ?
            <>
              <img src={imgSrc} className='profilePic' />
              <div className="username">{userInfo.username}</div>
            </> :
            <>
              <i className="fa-solid fa-user-tie"></i>
              <div className="username">Guest</div>
            </>
        }
   </div>
    </div>
  )
}

export default Topbar