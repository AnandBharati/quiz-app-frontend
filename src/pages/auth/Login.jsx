import { useState } from 'react'
import './login.scss';

import { useDispatch, useSelector } from 'react-redux';
import { doLogin, loginThunk } from '../../util/authSlice'
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.authReducer)


  async function clickHandler() {
    dispatch(loginThunk({ url: "http://localhost:5000/auth/validate", 'username': username, password: password }))
    .unwrap()
    .then((result)=> dispatch(doLogin(result)))
  }


  return (
    <div className="login">
      <div className='login-container'>
        <i className='fa fa-solid fa-lock'></i>
        <h1>Sign in</h1>
        <div className="username-container">
          <input type="text" name="username" id="username" required={true} value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="username">Username</label>
        </div>
        <div className="password-container">
          <input type="password" name="password" id="password" required={true} value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="password">Password</label>
        </div>

        <div className="remember-me-container">
          <input type="checkbox" name="chkbox" id="chkbox" />
          <label htmlFor="chkbox">Remember me </label>
        </div>

        <button type='button' className='btnSignIn' onClick={clickHandler}>Sign in</button>

        <div className="links">
        <Link href="#">Reset Password</Link>
          <Link href="#">Don't have an account? Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login