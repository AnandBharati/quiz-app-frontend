import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../util/authSlice';
import './navbar.scss'

function Navbar() {
  const data = useSelector((state) => state.authReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function clickHandler() {
    //logout handling
    dispatch(logout());
    navigate('/login');
  }

  return (
    <div className='navbar'>
      <ul>
        <li><NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to='/'>Home</NavLink></li>
        {(data.isloggedIn && data.username === 'admin') &&
          <li><NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to='/admin/admindashboard'>Admin Dashboard</NavLink> </li>}
        {
          !data.isloggedIn ?
            <><li><NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to='/login'>Login</NavLink> </li>
              <li><NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to='/register'> Register </NavLink></li> </>
            :
            <li><NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to='/logout' onClick={clickHandler}>Logout</NavLink> </li>
        }
        <li><NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to='/help'>Help</NavLink></li>
        <li><NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to='/aboutus'> About us</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar